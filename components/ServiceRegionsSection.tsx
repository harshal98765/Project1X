"use client"

import { MapPin, Navigation, Clock } from "lucide-react"

export default function MapsSection() {
  const facilities = [
    { name: "City General Hospital", distance: "6 M", icon: "🏥" },
    { name: "Family Health Clinic", distance: "25 M", icon: "⚕️" },
    { name: "Wellness Center", distance: "15 M", icon: "💪" },
  ]

  const handleExploreMap = () => {
    window.open("https://maps.google.com", "_blank")
  }

  return (
    <section id="coverage" className="relative py-24 bg-gradient-to-b from-white/50 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="animate-slideInLeft space-y-8">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Global Coverage</span>
            </div>

            {/* Title */}
            <h2 className="hero-title serif-heading text-foreground leading-tight">
              Service Regions &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Partner Network
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-md">
              We operate across major metropolitan areas, ensuring your prescription data reaches the right destination,
              anywhere in the network.
            </p>

            {/* Key Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 animate-slideInUp" style={{ animationDelay: "0.1s" }}>
                <div className="mt-1 p-2 bg-primary/10 rounded-lg flex-shrink-0">
                  <Navigation className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Real-time location tracking for Rx delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-slideInUp" style={{ animationDelay: "0.2s" }}>
                <div className="mt-1 p-2 bg-secondary/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Integrated pharmacy network map</p>
                </div>
              </div>
              <div className="flex items-start gap-4 animate-slideInUp" style={{ animationDelay: "0.3s" }}>
                <div className="mt-1 p-2 bg-accent/10 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Geo-fenced security protocols</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={handleExploreMap}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                <MapPin className="w-5 h-5" />
                Explore Interactive Map
              </button>
            </div>

            {/* Stats */}
            <div className="pt-8">
              <div className="inline-block bg-white rounded-2xl px-6 py-4 border border-border/50 shadow-lg">
                <p className="text-3xl font-bold serif-heading text-primary">124</p>
                <p className="text-sm text-muted-foreground font-medium">Active Locations</p>
              </div>
            </div>
          </div>

          <div className="animate-slideInRight flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Map Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-card bg-card">
                {/* Embedded Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14629.776896371765!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-6 py-4 shadow-lg border border-border/50">
                  <p className="text-sm font-semibold text-foreground">
                    <span className="text-2xl font-bold serif-heading text-primary">124</span>
                  </p>
                  <p className="text-xs text-muted-foreground font-medium">Active Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
