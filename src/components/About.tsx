export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Hamilton Templates
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hamilton is a curated collection of professional website templates designed to help developers and businesses launch projects faster. Each template is carefully crafted with modern design principles and production-ready code.
              </p>
              <p>
                Our templates are organized, zip-ready, and include everything you need to get started immediately - from comprehensive README files to detailed documentation and optimized assets.
              </p>
              <p>
                Every template comes with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                <li>Responsive design that works on all devices</li>
                <li>Clean, semantic HTML and CSS</li>
                <li>Optimized images and assets</li>
                <li>Comprehensive documentation</li>
                <li>LICENSE file for commercial use</li>
                <li>Regular updates and support</li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Fast Setup</h3>
              <p className="text-sm text-gray-300">Get up and running in minutes with our easy-to-follow setup guides</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Production Ready</h3>
              <p className="text-sm text-gray-300">Templates built with best practices and optimized for performance</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Fully Responsive</h3>
              <p className="text-sm text-gray-300">Looks perfect on desktop, tablet, and mobile devices</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-2">Regular Updates</h3>
              <p className="text-sm text-gray-300">Continuous improvements and new features added regularly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

