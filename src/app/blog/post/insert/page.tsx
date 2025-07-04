'use client';
import { User } from '@/app/lib/definition';
import { Button } from '@/app/ui/components/button';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Page() {
  const PROMPT =
    'You are a creative blogs writer. Write a blog post about the following topic:';
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState('');
  const [generating, setGenerating] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    content: '',
  });

  const generateContent = async () => {
    setGenerating(true);
    if (!formData.title) {
      setGenerating(false);
      return;
    }
    const reqParams = {
      messages: [
        {
          role: 'system',
          content: `${PROMPT} ${formData.title}`,
        },
        {
          role: 'user',
          content: `${formData.title}`,
        },
      ],
      model: 'gpt-3.5-turbo',
    };
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify(reqParams),
        }
      );
      const data = await response.json();
      setContent(data.choices[0].message.content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setGenerating(false);
    }
  };

  // Route guard effect
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await getSession();
        if (session?.user) {
          setUser(session.user as User);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          router.push('/blog/posts');
        }
      } catch (error) {
        console.error('Session check failed:', error);
        setIsAuthenticated(false);
        router.push('/blog/posts');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uuid = uuidv4();
    fetch(
      `/api/posts?id=${uuid}&title=${formData.title}&content=${
        content || formData.content
      }&date=${new Date().toISOString()}&author=${user?.name}&email=${
        user?.email
      }`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, id: uuid }),
      }
    )
      .then(() => {
        // Clear form fields
        setFormData({
          id: '',
          title: '',
          content: '',
        });
        router.push('/blog/posts');
      })
      .catch(console.error);
  };

  const postContent = useMemo(() => {
    return content || formData.content;
  }, [content, formData.content]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render the form if not authenticated
  if (!isAuthenticated) {
    return null; // Will redirect to signin page
  }

  return (
    <div className="py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className=" rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-900">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 sm:px-6 py-3 sm:py-4">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Create New Blog Post
            </h1>
            <p className="text-purple-100 mt-1 text-sm sm:text-base">
              Share your thoughts with the world
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Post Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter your blog post title..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Post Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={6}
                  value={postContent}
                  onChange={handleChange}
                  placeholder="Write your blog post content here..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-vertical text-sm sm:text-base"
                />
                {generating && (
                  <div className="mt-3 flex items-center text-sm text-purple-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600 mr-2"></div>
                    Generating content with AI...
                  </div>
                )}
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2">
                  <Button
                    onClick={generateContent}
                    disabled={!formData.title || generating || true}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto"
                    type="button"
                  >
                    {generating ? 'Generating...' : 'Generate with AI'}
                  </Button>
                  <span className="text-sm text-gray-500 text-center sm:text-left">
                    (coming soon)
                  </span>
                </div>
              </div>

              {false && (
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Publication Date
                  </label>
                  <input
                    type="text"
                    id="date"
                    name="date"
                    value={new Date().toISOString()}
                    readOnly
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed text-sm sm:text-base"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  onClick={() => router.push('/blog/posts')}
                  className="px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 hover:dark:bg-gray-800 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto order-2 sm:order-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base w-full sm:w-auto order-1 sm:order-2"
                >
                  Publish Post
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
