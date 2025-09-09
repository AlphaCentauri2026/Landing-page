import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background with particles visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/70 to-slate-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-transparent to-purple-600/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-8 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-500/8 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-emerald-500/8 rounded-full blur-xl animate-pulse delay-300"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto text-center z-20 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
          Ready-to-Use Website Templates
        </h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Launch faster with fully prepped templates for landing pages, dashboards, ecommerce, and more. 
          Professional designs ready to customize for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/templates"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-xl hover:shadow-blue-500/25 hover:scale-105 transform backdrop-blur-sm border border-white/20"
          >
            Browse Templates
          </Link>
          <Link
            href="/about"
            className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm bg-white/5"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
