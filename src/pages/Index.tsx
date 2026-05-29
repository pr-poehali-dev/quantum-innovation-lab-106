import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { OurServices } from "@/components/OurServices"
import { Testimonial } from "@/components/Testimonial"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <OurServices />
      <Testimonial />
      <Footer />
    </main>
  )
}