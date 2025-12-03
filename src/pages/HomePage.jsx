import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Contact from "../components/sections/Contact"
import Reviews from "../components/sections/Reviews"
import BackToTop from "../components/ui/BackToTop/BackToTop"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Reviews />
      <BackToTop />
    </>
  )
}