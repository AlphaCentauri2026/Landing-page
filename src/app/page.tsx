import { Header, Hero, FeaturedTemplates, About, Footer } from '@/components'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedTemplates />
        <About />
      </main>
      <Footer />
    </div>
  );
}
