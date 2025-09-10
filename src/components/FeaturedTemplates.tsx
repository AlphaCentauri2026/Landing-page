import Link from 'next/link'
import Image from 'next/image'

const featuredTemplates = [
  {
    title: 'Plumbing Template',
    description: 'Professional plumbing services template with service listings, contact forms, and customer testimonials for local plumbing businesses.',
    image: '/Template images/ABC plumbing images/Home.png',
    previewLink: 'https://abc-plumbing-8syb.vercel.app',
    category: 'Plumbing'
  },
  {
    title: 'Construction Template',
    description: 'Comprehensive construction company template featuring project galleries, service descriptions, and team showcase.',
    image: '/Template images/All around construction images/Home.png',
    previewLink: 'https://all-around-construction.vercel.app',
    category: 'Construction'
  },
  {
    title: 'Auto Repair Template',
    description: 'Complete auto repair shop template with service pricing, appointment booking, and vehicle maintenance information.',
    image: '/Template images/Auto repair images/Home.png',
    previewLink: 'https://auto-repair-template.vercel.app',
    category: 'Automotive'
  },
  {
    title: 'Dental Clinic Template',
    description: 'Modern dental practice template with appointment scheduling, service listings, and professional healthcare design.',
    image: '/Template images/Dental clinic images/Home.png',
    previewLink: 'https://dental-clinic-delta-opal.vercel.app',
    category: 'Healthcare'
  },
  {
    title: 'Fitness Studio Template',
    description: 'Dynamic fitness center template with class schedules, trainer profiles, and membership signup functionality.',
    image: '/Template images/Fitness studio images/Home.png',
    previewLink: 'https://fitness-studio-six.vercel.app',
    category: 'Fitness'
  },
  {
    title: 'Cleaning Service Template',
    description: 'Professional cleaning service template with service packages, booking system, and customer satisfaction features.',
    image: '/Template images/Fresh clean cleaning service images/ Fresh, clean homepage.png',
    previewLink: 'https://fresh-clean-services.vercel.app',
    category: 'Cleaning'
  },
  {
    title: 'Restaurant Template',
    description: 'Elegant café and restaurant template with menu display, reservations, and food photography showcase.',
    image: '/Template images/Le Café images/Home.png',
    previewLink: 'https://le-caf-nine.vercel.app',
    category: 'Restaurant'
  },
  {
    title: 'Veterinary Template',
    description: 'Comprehensive veterinary clinic template with service information, pet care tips, and appointment booking.',
    image: '/Template images/Pet clinic images/Home.png',
    previewLink: 'https://pet-clinic-seven.vercel.app',
    category: 'Veterinary'
  },
  {
    title: 'Landscaping Template',
    description: 'Professional landscaping company template showcasing services, project portfolios, and seasonal offerings.',
    image: '/Template images/Stoneway landscaping/Home.png',
    previewLink: 'https://stoneway-landscaping.vercel.app',
    category: 'Landscaping'
  },
  {
    title: 'Bakery Template',
    description: 'Delightful bakery and dessert shop template with product catalog, custom orders, and visual menu display.',
    image: '/Template images/Sweet Delites images/Home.png',
    previewLink: 'https://bakery-shop-pi.vercel.app',
    category: 'Bakery'
  }
]

export default function FeaturedTemplates() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Featured Templates
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our most popular and highly-rated templates used by thousands of businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {featuredTemplates.map((template, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden border border-white/10 hover:border-white/20 hover:scale-105 transform"
            >
              {/* Template Preview Image */}
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                <Image
                  src={template.image}
                  alt={`${template.title} template preview`}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="fallback absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 -z-10">
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-medium">{template.category}</p>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {template.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {template.description}
                </p>
                <Link
                  href={template.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25"
                >
                  Preview Template
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/templates"
            className="inline-flex items-center bg-gradient-to-r from-white/10 to-white/5 text-white px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 font-semibold backdrop-blur-sm hover:scale-105 transform"
          >
            View All Templates
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
