import React, { ReactNode } from "react";
import Image from "next/image";
import { 
  FlaskConical, 
  ShieldCheck, 
  Syringe, 
  Stethoscope, 
  Pill, 
  PackageCheck 
} from "lucide-react";
import service1 from './service1.jpg';
import service2 from './service2.jpg';
import service3 from './service3.jpg';

interface ServiceCardProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, text, icon }: ServiceCardProps) => (
  <div className="rounded-2xl bg-white p-6 border border-[#003c3f]-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#003c3f]-300 group">
    <div className="mb-4 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#003c3f] group-hover:bg-[#003c3f] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-[#003c3f] mb-3">{title}</h3>
    <p className="text-[#003c3f]">{text}</p>
  </div>
);

export default function ServicesPage() {
  const services: ServiceCardProps[] = [
    {
      title: "Vitamins & Supplements",
      text: "Carefully curated vitamins and supplements to support your overall well-being.",
      icon: <FlaskConical size={24} />,
    },
    {
      title: "Generic Plan",
      text: "Affordable, high-quality generic prescription plans without compromise.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Vaccinations",
      text: "Protection against preventable diseases for you and your loved ones.",
      icon: <Syringe size={24} />,
    },
    {
      title: "Medical Supplies & More",
      text: "Essential medical supplies to elevate your healthcare experience.",
      icon: <Stethoscope size={24} />,
    },
    {
      title: "Compounding",
      text: "Customized medications tailored to your unique health needs.",
      icon: <Pill size={24} />,
    },
    {
      title: "PakMyMeds",
      text: "Smart medication packaging to ensure you never miss a dose.",
      icon: <PackageCheck size={24} />,
    },
  ];

  return (
    <main className="px-6 md:px-12 py-20 space-y-28 bg-white">
      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003c3f]">
          Our Services
        </h1>

        <p className="text-lg text-text-[#003c3f] leading-relaxed">
          A dependable, easily accessible, and community-oriented retail pharmacy is what everyone seeks.
          LifeCare Pharmacy delivers personalized, affordable, and solution-oriented care beyond prescriptions.
        </p>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#003c3f] mb-12">
          What We Offer
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* COVID VACCINE EXPERT */}
      <section id="covid-vaccine-expert" className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#003c3f] border-l-4 border-[#003c3f] pl-4">
          Covid Vaccine Expert
        </h2>

        <p className="text-lg text-[#003c3f]">
          Your trusted destination for expert COVID-19 vaccination services in New Jersey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className=" bg-gradient-to-br from-sky-100 to-emerald-50 rounded-2xl p-6 border border-[#003c3f]-50 transition hover:shadow-lg">
            <h4 className="text-xl font-semibold text-[#003c3f] mb-4">
              Why Choose Life Care Pharmacy?
            </h4>
                                                    
            <ul className="list-disc list-inside space-y-2 text-[#003c3f] marker:text-[#003c3f]">
              <li>Expert and up-to-date vaccine guidance</li>
              <li>Personalized health consultations</li>
              <li>Convenient New Jersey location</li>
              <li>Multiple vaccine options available</li>
            </ul>
          </div>

          <div className="bg-white text-[#003c3f] rounded-2xl  p-6 pt-14 transition-all duration-300 hover:scale-[1.02] shadow-md">
            <h4 className="text-xl font-semibold mb-3">Get Started</h4>
            <p className="opacity-90 leading-relaxed">
              Visit lifecarepharmacyrx.com or call{" "}
              <span className="font-bold underline">+1 201-425-1187</span> to
              schedule your vaccination.
            </p>
          </div>
        </div>
      </section>

      {/* DISCOUNT MEDICATIONS */}
      <section id="discount-medications" className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#003c3f] border-l-4 border-[#003c3f] pl-4">
          Discount Medications
        </h2>

        <p className="text-lg text-[#003c3f]">
          Affordable healthcare solutions without compromising quality.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={service2}
              alt="Discount Medications"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="grid gap-6">
            {[

              "Competitive pricing on prescriptions",

              "Wide range of generic & brand medications",

              "Expert pharmacist guidance",

            ].map((item, index) => (

              <div

                key={index}

                className="flex justify-center items-center bg-white rounded-xl p-6 border border-[#003c3f]-200

                           transition-all duration-300 hover:scale-105 hover:shadow-lg"

              >

                <p className="text-[#003c3f]">{item}</p>

              </div>

            ))}
          </div>
        </div>
      </section>

      {/* MEDICATION COUNSELING */}
      <section id="medication-counseling" className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#003c3f] border-l-4 border-[#003c3f] pl-4">
          Medication Counseling
        </h2>

        <p className="text-lg text-[#003c3f]">
          Personalized guidance from experienced pharmacists to help you manage medications effectively.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Services Card */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-[#003c3f]-100 shadow-md h-fit">
            <h4 className="text-xl font-semibold text-[#003c3f] mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                "One-on-one consultations",
                "Dosage & side-effect education",
                "Drug interaction awareness",
                "Accessible support anytime",
              ].map((bullet, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span className="text-lg text-[#003c3f]">✓</span>
                  <span className="text-[#003c3f]">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Two Images Side by Side */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={service3}
              alt="Medication Counseling - Pharmacist"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <Image
              src={service1}
              alt="Medication Counseling - Patient Education"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* VACCINATION CONSULTATION */}
      <section id="vaccination-consultation" className="max-w-6xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-[#003c3f] border-l-4 border-[#003c3f] pl-4">
          Vaccination Consultation
        </h2>

        <p className="text-lg text-[#003c3f]">
          Comprehensive vaccination consultations tailored to your health profile.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-sky-100 to-emerald-50 duration-500 hover:shadow-2xl">
            <h4 className="text-xl font-semibold text-[#003c3f] mb-3">
              What We Provide
            </h4>

            <ul className="list-disc list-inside space-y-2 text-[#003c3f]">
              <li>Expert immunization guidance</li>
              <li>Personalized recommendations</li>
              <li>Vaccine education & awareness</li>
            </ul>
          </div>

          <div className="bg-white text-[#003c3f] rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-md flex flex-col justify-center">
            <h4 className="text-xl font-semibold mb-3">
              Book Your Consultation
            </h4>

            <p className="opacity-90 leading-relaxed">
              Visit lifecarepharmacyrx.com or call{" "}
              <span className="font-bold underline">+1 201-425-1187</span> to
              schedule today.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}