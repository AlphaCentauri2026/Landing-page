import { Header, Footer } from '@/components'
import Image from 'next/image'

const templates = [
  {
    id: 'plumbing-template',
    title: 'Plumbing Template',
    category: 'Plumbing',
    description: 'Professional plumbing services website with service listings, emergency contact, and customer testimonials.',
    image: '/Template images/ABC plumbing images/ Plumbing home.png',
    previewLink: 'https://abc-plumbing-8syb.vercel.app/',
    features: ['Service Pages', 'Emergency Contact', 'Customer Reviews', 'Service Areas'],
    price: '$395'
  },
  {
    id: 'construction-template',
    title: 'Construction Template',
    category: 'Construction',
    description: 'Comprehensive construction company website featuring projects, equipment fleet, and team showcase.',
    image: '/Template images/All around construction images/Construction home .png',
    previewLink: 'https://all-around-construction.vercel.app/',
    features: ['Project Gallery', 'Equipment Fleet', 'Team Profiles', 'Service Areas'],
    price: '$395'
  },
  {
    id: 'auto-repair-template',
    title: 'Auto Repair Template',
    category: 'Automotive',
    description: 'Modern auto repair shop website with service pricing, customer reviews, and appointment booking.',
    image: '/Template images/Auto repair images/Home.png',
    previewLink: 'https://auto-repair-template.vercel.app/',
    features: ['Service Pricing', 'Customer Reviews', 'Appointment Booking', 'Service History'],
    price: '$395'
  },
  {
    id: 'dental-clinic-template',
    title: 'Dental Clinic Template',
    category: 'Healthcare',
    description: 'Professional dental practice website with services, staff profiles, and patient information.',
    image: '/Template images/Dental clinic images/Home.png',
    previewLink: 'https://dental-clinic-delta-opal.vercel.app/',
    features: ['Service Listings', 'Staff Profiles', 'Patient Portal', 'Appointment Booking'],
    price: '$395'
  },
  {
    id: 'fitness-studio-template',
    title: 'Fitness Studio Template',
    category: 'Fitness',
    description: 'Dynamic fitness studio website with class schedules, trainer profiles, and membership options.',
    image: '/Template images/Fitness studio images/Home.png',
    previewLink: 'https://fitness-studio-six.vercel.app/',
    features: ['Class Schedules', 'Trainer Profiles', 'Membership Plans', 'Sign-up Forms'],
    price: '$395'
  },
  {
    id: 'cleaning-service-template',
    title: 'Cleaning Service Template',
    category: 'Cleaning',
    description: 'Professional cleaning service website with booking system, service areas, and customer testimonials.',
    image: '/Template images/Fresh clean cleaning service images/ Fresh, clean homepage.png',
    previewLink: 'https://fresh-clean-services.vercel.app/',
    features: ['Online Booking', 'Service Areas', 'Customer Testimonials', 'Service Gallery'],
    price: '$395'
  },
  {
    id: 'restaurant-template',
    title: 'Restaurant Template',
    category: 'Restaurant',
    description: 'Elegant restaurant website featuring menu, about us, and contact information.',
    image: '/Template images/Le Café images/Home.png',
    previewLink: 'https://le-caf-nine.vercel.app/',
    features: ['Menu Display', 'About Us', 'Contact Info', 'Reservation System'],
    price: '$395'
  },
  {
    id: 'veterinary-template',
    title: 'Veterinary Template',
    category: 'Veterinary',
    description: 'Comprehensive veterinary clinic website with services, appointments, and care tips.',
    image: '/Template images/Pet clinic images/Home.png',
    previewLink: 'https://pet-clinic-seven.vercel.app/',
    features: ['Appointment Booking', 'Care Tips', 'Service Gallery', 'Staff Profiles'],
    price: '$395'
  },
  {
    id: 'landscaping-template',
    title: 'Landscaping Template',
    category: 'Landscaping',
    description: 'Professional landscaping company website showcasing projects, services, and customer testimonials.',
    image: '/Template images/Stoneway landscaping/Landscaping home.png',
    previewLink: 'https://stoneway-landscaping.vercel.app/',
    features: ['Project Gallery', 'Service Listings', 'Customer Testimonials', 'Contact Forms'],
    price: '$395'
  },
  {
    id: 'bakery-template',
    title: 'Bakery Template',
    category: 'Bakery',
    description: 'Delicious bakery website with product showcase, ordering system, and promotions.',
    image: '/Template images/Sweet Delites images/Home.png',
    previewLink: 'https://bakery-shop-pi.vercel.app/',
    features: ['Product Showcase', 'Online Ordering', 'Promotions', 'Newsletter Signup'],
    price: '$395'
  }
]

const categories = ['All', 'Plumbing', 'Construction', 'Automotive', 'Healthcare', 'Fitness', 'Cleaning', 'Restaurant', 'Veterinary', 'Landscaping', 'Bakery']

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Professional Website Templates
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose from our collection of premium, ready-to-use website templates. Each template is fully prepped with README, LICENSE, assets, and organized file structure.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-white rounded-lg hover:from-blue-600/50 hover:to-purple-600/50 transition-all duration-300 border border-white/10 hover:border-white/30 backdrop-blur-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {templates.map((template) => (
                <div
                  key={template.id}
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
                        {template.price}
                      </span>
                    </div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-blue-400 font-medium">{template.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {template.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {template.features.map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={template.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm text-center"
                      >
                        Preview
                      </a>
                      <a
                        href="tel:516-448-9417"
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium text-sm text-center"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
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
