import type React from "react"
import HeroSection from "../components/home/HeroSection"
import ServicesGrid from "../components/home/ServicesGrid"
import Navbar from "../components/common/Navbar"

const Home: React.FC = () => {
  return (
    <main className="bg-black text-white overflow-x-hidden w-full">
      <div className="relative pt-2 z-10">
        <Navbar />
      </div>
      <div className="max-w-[100vw] overflow-x-hidden">
        <HeroSection />
        <ServicesGrid />
      </div>
    </main>
  )
}

export default Home
