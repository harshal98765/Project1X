"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesCarousel from "@/components/services-carousel"
import FeaturesSection from "@/components/features-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesCarousel />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
