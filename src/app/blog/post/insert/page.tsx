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
    date: new Date().toISOString(),
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
      }&date=${formData.date}&author=${user?.name}`,
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
          date: new Date().toISOString(),
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
    <div className="bg-white p-8 rounded shadow">
      <h2 className="text-2xl mb-4 text-purple-700">New Blog Post</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            value={postContent}
            onChange={(e) => handleChange(e)}
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          ></textarea>
          {generating && (
            <div className="mt-2 text-sm text-gray-600">Generating...</div>
          )}
          <Button
            onClick={generateContent}
            className="text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
            type="button"
          >
            Generate Content
          </Button>
        </div>
        <div>
          <label htmlFor="date" className="block font-medium">
            Date:
          </label>
          <input
            type="text"
            id="date"
            name="date"
            value={formData.date}
            readOnly
            className="w-full border-2 border-purple-100 p-2 rounded-md focus:border-purple-200 focus:outline-none"
          />
        </div>
        <div>
          <Button
            type="submit"
            className="text-white px-4 py-2 rounded-md bg-purple-600  hover:bg-purple-700"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
