import { Header, Footer } from '@/components'

export default function LicensePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              License Agreement
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Commercial Use License</h2>
                <p className="text-gray-300 mb-6">
                  This license grants you the right to use Hamilton Web Design templates for commercial purposes. 
                  Each template purchase includes a commercial use license.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">What You Can Do</h2>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Use templates for client projects</li>
                  <li>Modify and customize templates as needed</li>
                  <li>Create multiple websites using the same template</li>
                  <li>Resell websites built with our templates</li>
                  <li>Use templates for personal projects</li>
                  <li>Create derivative works based on templates</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">What You Cannot Do</h2>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Resell or redistribute the template files themselves</li>
                  <li>Claim ownership of the original template design</li>
                  <li>Remove copyright notices from template files</li>
                  <li>Use templates for illegal or harmful purposes</li>
                  <li>Create competing template libraries</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">License Types</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Single Template License</h3>
                  <p className="text-gray-300 mb-4">
                    Includes commercial use rights for one template. Perfect for individual projects or small businesses.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Template Bundle License</h3>
                  <p className="text-gray-300 mb-4">
                    Includes commercial use rights for multiple templates. Ideal for agencies or developers working on various projects.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Full Access License</h3>
                  <p className="text-gray-300 mb-4">
                    Includes commercial use rights for all current and future templates. Best for large agencies or frequent users.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-white mb-6">Support and Updates</h2>
                <p className="text-gray-300 mb-6">
                  All licenses include basic support and access to template updates. Priority support is available for bundle and full access licenses.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Copyright Notice</h2>
                <p className="text-gray-300 mb-6">
                  All templates are copyrighted by Hamilton Web Design. The commercial use license does not transfer copyright ownership.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  For questions about licensing or to request custom licensing terms, please contact us:
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
