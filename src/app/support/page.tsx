import { Header, Footer } from '@/components'

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Support Center
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Email Support</p>
                      <a href="mailto:CoreyHamiltondev@gmail.com" className="text-blue-400 hover:text-blue-300">
                        CoreyHamiltondev@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Phone Support</p>
                      <a href="tel:516-448-9417" className="text-green-400 hover:text-green-300">
                        (516) 448-9417
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-purple-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-white font-medium">Response Time</p>
                      <p className="text-gray-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Support Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Emergency support available for Full Access Pass customers
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">How do I get started with a template?</h3>
                  <p className="text-gray-300">
                    After purchase, you&apos;ll receive download links via email. Each template includes detailed documentation and setup instructions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Can I customize the templates?</h3>
                  <p className="text-gray-300">
                    Yes! All templates are fully customizable. You can modify colors, content, layouts, and add your own branding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">What if I need help with customization?</h3>
                  <p className="text-gray-300">
                    We provide basic support for template setup and customization. For complex modifications, we offer custom development services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds?</h3>
                  <p className="text-gray-300">
                    Due to the digital nature of our products, we don&apos;t offer refunds once templates have been downloaded. However, we&apos;re happy to help with any issues you encounter.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Can I use templates for client work?</h3>
                  <p className="text-gray-300">
                    Absolutely! Our commercial license allows you to use templates for client projects, modify them, and even resell the websites you create.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Tiers */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Support Tiers</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Basic Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Included with all purchases</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Template setup help</li>
                    <li>• Basic customization guidance</li>
                    <li>• Email support</li>
                    <li>• 24-48 hour response</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Priority Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Template Bundle customers</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Everything in Basic</li>
                    <li>• Phone support</li>
                    <li>• 12-24 hour response</li>
                    <li>• Custom modification help</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">Premium Support</h3>
                  <p className="text-gray-300 text-sm mb-4">Full Access Pass customers</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Everything in Priority</li>
                    <li>• Emergency support</li>
                    <li>• Same-day response</li>
                    <li>• Custom development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
