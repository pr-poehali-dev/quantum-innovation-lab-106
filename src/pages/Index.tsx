import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Testimonial } from "@/components/Testimonial"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}