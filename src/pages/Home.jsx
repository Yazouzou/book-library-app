// src/pages/Home.jsx
import Hero from "../components/Hero"
import Categories from "../components/Categories"
import Features from "../components/Features"
import Steps from "../components/Steps"
import Reviews from "../components/Reviews"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <Steps />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home