// components/AboutContent.tsx

const Page = () => {
  return (
    <div className="min-h-screen ">
      <section className="prose prose-lg max-w-4xl mx-auto py-16 px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About This Project
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <div className="text-lg leading-relaxed text-gray-700">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex gap-2">
              <p>Hi, I'm Mahmod Attar</p>
              <img
                src="/avatar.png"
                alt="Mahmod Attar"
                className="inline-block h-8 w-8 rounded-full"
              />
            </span>
            <br />I built this small blog platform as a hands-on way to sharpen
            my skills with the latest{' '}
            <span className="font-semibold text-blue-600">
              Next.js (v14.2.3), React 18, and Tailwind CSS
            </span>
            . It's a playground where I can experiment, iterate, and share what
            I learn along the way.
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🛠️</span>
            What's Under the Hood
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <span className="text-2xl mr-3">⚡</span>
              <div>
                <strong className="text-blue-800">Next.js 14.2.3</strong>
                <p className="text-sm text-gray-600">
                  App Router + Server Actions
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
              <span className="text-2xl mr-3">🎨</span>
              <div>
                <strong className="text-purple-800">Tailwind CSS 3.4</strong>
                <p className="text-sm text-gray-600">Utility-first styling</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
              <span className="text-2xl mr-3">🔒</span>
              <div>
                <strong className="text-green-800">NextAuth v5</strong>
                <p className="text-sm text-gray-600">Gmail Sign-In</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
              <span className="text-2xl mr-3">🧠</span>
              <div>
                <strong className="text-orange-800">
                  Vercel Postgres + Neon
                </strong>
                <p className="text-sm text-gray-600">Scalable serverless SQL</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl md:col-span-2">
              <span className="text-2xl mr-3">🔧</span>
              <div>
                <strong className="text-indigo-800">React 18</strong>
                <p className="text-sm text-gray-600">
                  Zod, clsx, Radix UI, Lucide Icons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">✨</span>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🖊️', text: 'Gmail Sign-In using NextAuth' },
              { icon: '📱', text: 'Responsive UI' },
              { icon: '🚀', text: 'Server Actions + Typed DB Access' },
              { icon: '🎯', text: 'Clean modern stack with good DX' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mr-3">{feature.icon}</span>
                <span className="text-gray-700 font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why I Built It */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-3">🤔</span>
            Why I Built It
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            To deepen my understanding of modern React and Next.js, and explore
            Tailwind 4 and serverless DBs in production-like settings.
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            What's Next?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '💬', text: 'Comments system' },
              { icon: '🔍', text: 'Full-text search' },
              { icon: '📝', text: 'Inline editing' },
              { icon: '🌍', text: 'Edge functions deployment' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
