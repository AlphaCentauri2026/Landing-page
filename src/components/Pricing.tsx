import CustomizationForm from './CustomizationForm'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Premium, Ready-to-Use Website Templates
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Each template is fully prepped with README, LICENSE, assets, and organized file structure. 
            Designed to save you weeks of development time.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Single Template */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Single Template</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$395</span>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  One fully prepped website template
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Includes README, LICENSE, and assets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Commercial use license
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Organized file structure
                </li>
              </ul>
              <a
                href="tel:516-448-9417"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 inline-block text-center"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Two Templates with Full Customization */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300 hover:scale-105 transform relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Two Templates</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$695</span>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Two templates of your choice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full customization included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Commercial use license
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <a
                href="tel:516-448-9417"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 inline-block text-center"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Ten Template Bundle */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Ten Templates</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$1,295</span>
              </div>
              <ul className="space-y-4 text-gray-300 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All 10 templates included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Commercial use license
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Early access to new templates
                </li>
              </ul>
              <a
                href="tel:516-448-9417"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 inline-block text-center"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        {/* Customization Form */}
        <section id="customization">
          <CustomizationForm />
        </section>

        {/* Contact Information */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Contact me directly to discuss your template needs and get started with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:516-448-9417"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium shadow-lg hover:shadow-green-500/25 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (516) 448-9417
              </a>
              <a
                href="mailto:CoreyHamiltondev@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email CoreyHamiltondev@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Terms & Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">License</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                By purchasing a template, you are granted a non-exclusive, non-transferable license to use it for personal or commercial projects.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                You may not resell, redistribute, sublicense, or repackage any template as your own.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Usage Rights</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Templates may be modified and customized for your projects.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Commercial use is permitted for client projects, personal brands, and business websites under your license.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Refunds</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Due to the digital nature of our products, all sales are final. Refunds are not available once a template has been delivered or downloaded.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Updates</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Templates are provided as-is at the time of purchase. Any future updates or improvements may be available for additional purchase.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Support is included for bundle and full access plans. Single template purchases include documentation but not direct support.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Ownership</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Templates remain the intellectual property of Hamilton web design. Purchase grants you a license, not ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
