import Link from 'next/link'

const categories = [
  {
    title: 'Service Business',
    description: 'Professional templates for plumbing, cleaning, and local service businesses.',
    icon: '🔧',
    link: '/categories/service'
  },
  {
    title: 'Healthcare',
    description: 'Medical and veterinary clinic templates with appointment booking features.',
    icon: '🏥',
    link: '/categories/healthcare'
  },
  {
    title: 'Construction',
    description: 'Building and construction company templates with project showcases.',
    icon: '🏗️',
    link: '/categories/construction'
  },
  {
    title: 'Automotive',
    description: 'Auto repair and maintenance shop templates with service listings.',
    icon: '🚗',
    link: '/categories/automotive'
  },
  {
    title: 'Food & Restaurant',
    description: 'Café, bakery, and restaurant templates with menu displays.',
    icon: '🍽️',
    link: '/categories/food-restaurant'
  },
  {
    title: 'Fitness',
    description: 'Gym and fitness studio templates with class schedules and memberships.',
    icon: '💪',
    link: '/categories/fitness'
  },
  {
    title: 'Landscaping',
    description: 'Professional landscaping templates showcasing outdoor services.',
    icon: '🌳',
    link: '/categories/landscaping'
  },
  {
    title: 'Business',
    description: 'General business templates for various industries and services.',
    icon: '💼',
    link: '/categories/business'
  }
]

export default function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Template Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of professionally designed templates across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 hover:border-gray-200"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {category.description}
              </p>
              <Link
                href={category.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View Templates
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
