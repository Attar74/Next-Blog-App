// components/AboutContent.tsx

const Page = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <section className="prose prose-lg dark:prose-invert max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About This Project
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 mb-6 sm:mb-8">
          <div className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex flex-col sm:flex-row gap-2 items-center sm:items-start">
              <p>Hi, I'm Mahmod Attar</p>
              <img
                src="/avatar.png"
                alt="Mahmod Attar"
                className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              />
            </span>
            <br />I built this small blog platform as a hands-on way to sharpen
            my skills with the latest{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Next.js (v14.2.3), React 18, and Tailwind CSS
            </span>
            . It's a playground where I can experiment, iterate, and share what
            I learn along the way.
          </div>
        </div>

        {/* Tech Stack */}
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">🛠️</span>
            What's Under the Hood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg sm:rounded-xl border border-blue-200 dark:border-blue-700">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">⚡</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-300 text-sm sm:text-base">
                  Next.js 14.2.3
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  App Router + Server Actions
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-lg sm:rounded-xl border border-purple-200 dark:border-purple-700">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🎨</span>
              <div>
                <strong className="text-purple-800 dark:text-purple-300 text-sm sm:text-base">
                  Tailwind CSS 3.4
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Utility-first styling
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50 rounded-lg sm:rounded-xl border border-green-200 dark:border-green-700">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🔒</span>
              <div>
                <strong className="text-green-800 dark:text-green-300 text-sm sm:text-base">
                  NextAuth v5
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Gmail Sign-In
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/50 dark:to-orange-800/50 rounded-lg sm:rounded-xl border border-orange-200 dark:border-orange-700">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🧠</span>
              <div>
                <strong className="text-orange-800 dark:text-orange-300 text-sm sm:text-base">
                  Vercel Postgres + Neon
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Scalable serverless SQL
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/50 dark:to-indigo-800/50 rounded-lg sm:rounded-xl sm:col-span-2 border border-indigo-200 dark:border-indigo-700">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🔧</span>
              <div>
                <strong className="text-indigo-800 dark:text-indigo-300 text-sm sm:text-base">
                  React 18
                </strong>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Zod, clsx, Radix UI, Lucide Icons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">✨</span>
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: '🖊️', text: 'Gmail Sign-In using NextAuth' },
              { icon: '📱', text: 'Responsive UI' },
              { icon: '🚀', text: 'Server Actions + Typed DB Access' },
              { icon: '🎯', text: 'Clean modern stack with good DX' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
              >
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                  {feature.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why I Built It */}
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">🤔</span>
            Why I Built It
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-4 sm:p-6 rounded-lg sm:rounded-xl">
            To deepen my understanding of modern React and Next.js, and explore
            Tailwind 4 and serverless DBs in production-like settings.
          </p>
        </div>

        {/* What's Next */}
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 flex items-center">
            What's Next?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: '💬', text: 'Comments system' },
              { icon: '🔍', text: 'Full-text search' },
              { icon: '📝', text: 'Inline editing' },
              { icon: '🌍', text: 'Edge functions deployment' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-800/50 rounded-lg sm:rounded-xl hover:shadow-md transition-shadow border border-emerald-200 dark:border-emerald-700"
              >
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                  {item.icon}
                </span>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
