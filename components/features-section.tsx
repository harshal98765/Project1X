"use client"

import { Shield, Users, Award, Leaf } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Security First",
    description: "HIPAA-compliant systems protecting your personal health information",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Licensed pharmacists with years of professional experience",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "All medications verified and quality checked before dispatch",
  },
  {
    icon: Leaf,
    title: "Care & Compassion",
    description: "Patient-centered approach to every interaction and prescription",
  },
]

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the highest standard of pharmacy care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-border hover:shadow-xl hover:border-primary transition-all duration-300 animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
