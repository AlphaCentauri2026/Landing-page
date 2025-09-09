import { Header, Footer } from '@/components'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Purchase templates or services</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Fill out contact forms</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Process your orders and provide customer support</li>
                  <li>Send you important updates about your purchases</li>
                  <li>Improve our products and services</li>
                  <li>Respond to your inquiries and requests</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">5. Cookies and Tracking</h2>
                <p className="text-gray-300 mb-6">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. Third-Party Services</h2>
                <p className="text-gray-300 mb-6">
                  We may use third-party services for payment processing and analytics. These services have their own privacy policies.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">8. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="text-gray-300">
                  <p>Email: CoreyHamiltondev@gmail.com</p>
                  <p>Phone: (516) 448-9417</p>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
