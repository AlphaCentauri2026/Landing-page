import { Header, Hero, FeaturedTemplates, Pricing, About, Footer } from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedTemplates />
        <Pricing />
        <About />
      </main>
      <Footer />
    </div>
  );
}
