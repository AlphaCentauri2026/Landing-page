import { Header, Footer } from '@/components'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Our Templates
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional, production-ready website templates built with modern technologies and best practices.
            </p>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Built with Modern Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our templates are crafted using industry-standard frameworks and tools for optimal performance and maintainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Next.js */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Next.js 15</h3>
                  <p className="text-gray-300 mb-4">
                    React framework with App Router, Server Components, and built-in optimization for production-ready applications.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• App Router with layouts</li>
                    <li>• Server-side rendering (SSR)</li>
                    <li>• Static site generation (SSG)</li>
                    <li>• Image optimization</li>
                    <li>• Built-in performance monitoring</li>
                  </ul>
                </div>
              </div>

              {/* React */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">React 18</h3>
                  <p className="text-gray-300 mb-4">
                    Modern React with hooks, functional components, and concurrent features for smooth user experiences.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Functional components</li>
                    <li>• React Hooks (useState, useEffect)</li>
                    <li>• Concurrent rendering</li>
                    <li>• Suspense for data fetching</li>
                    <li>• TypeScript support</li>
                  </ul>
                </div>
              </div>

              {/* TypeScript */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.812-.347 5.093 5.093 0 0 0-.881-.107c-.325-.02-.65-.03-.97-.03-.42 0-.798.041-1.136.123-.337.082-.626.202-.867.36a2.272 2.272 0 0 0-.566.537c-.13.198-.22.415-.27.65-.05.234-.075.473-.075.716v4.747c0 .243.025.482.075.716.05.235.14.452.27.65.13.198.31.375.566.537.255.158.53.278.867.36.338.082.716.123 1.136.123.32 0 .645-.01.97-.03.293-.02.582-.06.881-.107.27-.05.53-.12.812-.347v2.458a6.38 6.38 0 0 1-1.306.34 5.585 5.585 0 0 1-1.627.111c-1.243 0-2.34-.21-3.29-.63-.95-.42-1.72-1.01-2.31-1.77-.59-.76-.885-1.656-.885-2.69v-4.747c0-1.034.295-1.93.885-2.69.59-.76 1.36-1.35 2.31-1.77.95-.42 2.047-.63 3.29-.63zm-15.113.188h2.756v13.124H3.375V9.938z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">TypeScript</h3>
                  <p className="text-gray-300 mb-4">
                    Type-safe JavaScript with static typing, interfaces, and advanced tooling for robust development.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Static type checking</li>
                    <li>• Interface definitions</li>
                    <li>• Advanced IntelliSense</li>
                    <li>• Compile-time error detection</li>
                    <li>• Better refactoring support</li>
                  </ul>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tailwind CSS</h3>
                  <p className="text-gray-300 mb-4">
                    Utility-first CSS framework for rapid UI development with responsive design and dark mode support.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Utility-first approach</li>
                    <li>• Responsive design system</li>
                    <li>• Dark mode support</li>
                    <li>• Custom color palettes</li>
                    <li>• Optimized bundle size</li>
                  </ul>
                </div>
              </div>

              {/* Vercel Deployment */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Vercel Deployment</h3>
                  <p className="text-gray-300 mb-4">
                    Optimized deployment with edge functions, automatic HTTPS, and global CDN for maximum performance.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Edge functions</li>
                    <li>• Automatic HTTPS</li>
                    <li>• Global CDN</li>
                    <li>• Preview deployments</li>
                    <li>• Analytics integration</li>
                  </ul>
                </div>
              </div>

              {/* Modern Tooling */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Modern Tooling</h3>
                  <p className="text-gray-300 mb-4">
                    Complete development environment with ESLint, Prettier, and modern build tools for code quality.
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• ESLint configuration</li>
                    <li>• Prettier formatting</li>
                    <li>• Hot module replacement</li>
                    <li>• Source maps</li>
                    <li>• Development server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                What&apos;s Included
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Each template comes with everything you need to get started immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Complete File Structure</h3>
                <p className="text-gray-300">
                  Organized project structure with components, pages, styles, and assets properly separated for easy maintenance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">All Assets Included</h3>
                <p className="text-gray-300">
                  Images, icons, fonts, and other assets are included and optimized for web performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Detailed Documentation</h3>
                <p className="text-gray-300">
                  Comprehensive README files with setup instructions, customization guides, and deployment steps.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Commercial License</h3>
                <p className="text-gray-300">
                  Full commercial use rights for client projects, personal brands, and business websites.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Production Ready</h3>
                <p className="text-gray-300">
                  Optimized for performance, SEO, and accessibility with modern web standards and best practices.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Easy Customization</h3>
                <p className="text-gray-300">
                  Well-structured code with clear naming conventions and modular components for easy customization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us directly to discuss your template needs and get started with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:516-448-9417"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-green-500/25 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (516) 448-9417
              </a>
              <a
                href="mailto:CoreyHamiltondev@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email CoreyHamiltondev@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
