const Page = () => {
  return (
    <div className="min-h-screen">
      <section className="prose prose-lg max-w-4xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-6 sm:mb-8">
          <div className="text-base sm:text-lg leading-relaxed text-gray-700">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex flex-col sm:flex-row gap-2 items-center sm:items-start">
              <p>Let's Connect!</p>
              <img
                src="/avatar.png"
                alt="Mahmod Attar"
                className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              />
            </span>
            <br />
            I'm always excited to connect with fellow developers, discuss new
            opportunities, or just chat about the latest in web development.
            Feel free to reach out through any of the platforms below!
          </div>
        </div>

        {/* Contact Methods */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">💬</span>
            Contact Methods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <a
              href="https://wa.me/+31653209256"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200"
            >
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </span>
              <div>
                <strong className="text-green-800 text-base sm:text-lg">
                  WhatsApp
                </strong>
                <p className="text-xs sm:text-sm text-gray-600">
                  Quick chat & voice messages
                </p>
                <p className="text-xs text-green-600 mt-1">Available 24/7</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/attar74/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-200"
            >
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <div>
                <strong className="text-blue-800 text-base sm:text-lg">
                  LinkedIn
                </strong>
                <p className="text-xs sm:text-sm text-gray-600">
                  Professional network
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Connect & collaborate
                </p>
              </div>
            </a>

            <a
              href="https://github.com/attar74"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              <div>
                <strong className="text-gray-800 text-base sm:text-lg">
                  GitHub
                </strong>
                <p className="text-xs sm:text-sm text-gray-600">
                  Code & projects
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Open source contributions
                </p>
              </div>
            </a>

            <a
              href="mailto:m.elattar.dev@gmail.com"
              className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-purple-200"
            >
              <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l16 10-16 10z" />
                </svg>
              </span>
              <div>
                <strong className="text-purple-800 text-base sm:text-lg">
                  Email
                </strong>
                <p className="text-xs sm:text-sm text-gray-600">
                  Formal communication
                </p>
                <p className="text-xs text-purple-600 mt-1 break-all">
                  m.elattar.dev@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">⏱️</span>
            Response Time
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
              <span className="text-xl sm:text-2xl">⚡</span>
              <p className="font-semibold text-green-800 mt-2 text-sm sm:text-base">
                WhatsApp
              </p>
              <p className="text-xs sm:text-sm text-gray-600">Within minutes</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <span className="text-xl sm:text-2xl">📱</span>
              <p className="font-semibold text-blue-800 mt-2 text-sm sm:text-base">
                LinkedIn
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Within 24 hours
              </p>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl sm:col-span-2 lg:col-span-1">
              <span className="text-xl sm:text-2xl">📧</span>
              <p className="font-semibold text-purple-800 mt-2 text-sm sm:text-base">
                Email
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Within 48 hours
              </p>
            </div>
          </div>
        </div>

        {/* Best Time to Contact */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">⏱️</span>
            Best Time to Reach Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl">
            I'm most active during <strong>9 AM - 6 PM (GMT+3)</strong>. For
            urgent matters, WhatsApp is your best bet. For project discussions
            or collaborations, LinkedIn or email work great!
          </p>
        </div>

        {/* Let's Work Together */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2 sm:mr-3">🚀</span>
            Let's Work Together
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: '💡', text: 'Project collaboration' },
              { icon: '💼', text: 'Technical consulting' },
              { icon: '🤝', text: 'Knowledge sharing' },
              { icon: '🚀', text: 'Innovation discussions' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3">
                  {item.icon}
                </span>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
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
