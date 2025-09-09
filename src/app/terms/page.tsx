import { Header, Footer } from '@/components'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Hamilton Web Design templates, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. License and Usage</h2>
                <p className="text-gray-300 mb-4">
                  All templates are provided under a commercial use license. You may:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Use templates for commercial projects</li>
                  <li>Modify and customize templates for client work</li>
                  <li>Create multiple projects using the same template</li>
                  <li>Resell websites built with our templates</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Restrictions</h2>
                <p className="text-gray-300 mb-4">You may not:</p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Resell or redistribute the template files themselves</li>
                  <li>Claim ownership of the template design</li>
                  <li>Remove copyright notices from template files</li>
                  <li>Use templates for illegal or harmful purposes</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">4. Payment and Refunds</h2>
                <p className="text-gray-300 mb-4">
                  All payments are processed securely. Due to the digital nature of our products, we do not offer refunds once templates have been downloaded.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">5. Support</h2>
                <p className="text-gray-300 mb-6">
                  Basic support is included with all template purchases. We provide assistance with template setup and basic customization questions.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
                <p className="text-gray-300 mb-6">
                  Hamilton Web Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our templates.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
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
