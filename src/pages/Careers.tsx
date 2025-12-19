import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import heroVideo from "@/assets/IMG_2863.MOV";

const Careers = () => {
  const [activeSection, setActiveSection] = useState<number | null>(0);

  const sections = [
    {
      title: "OUR",
      subtitle: "Services",
      label: "Our Services",
      content: {
        headline: "Comprehensive Solutions for Your Brand's Success",
        description: [
          "At ScaleX Studios, we offer a full spectrum of creative and marketing services designed to elevate your brand and drive measurable results.",
          "Our services include video production & motion graphics, meme marketing, content marketing, ad production, web development, brand identity design, social media management, and digital strategy."
        ]
      }
    },
    {
      title: "WHAT",
      subtitle: "We Do For You",
      label: "What We Do For You",
      content: {
        headline: "Empowering Brands with Creative Excellence",
        description: [
          "We help businesses build memorable brands and meaningful audience connections.",
          "From brand overhauls to viral campaigns and high-performance websites, we handle everything end-to-end."
        ]
      }
    },
    {
      title: "HOW",
      subtitle: "We Help You",
      label: "How We Help You",
      content: {
        headline: "Transforming Ideas into Impactful Results",
        description: [
          "Our approach combines strategy with creative execution.",
          "We focus on performance-driven systems that scale and compound over time."
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* DETAILED SECTION */}
      <section className="bg-black pt-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mb-10 text-white/90 flex-wrap">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`transition-opacity ${
                  activeSection === index ? "opacity-100 font-semibold" : "opacity-60"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* TEXT BLOCK */}
          <div className="mb-10">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-3">
              {sections[activeSection!].label}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {sections[activeSection!].content.headline}
            </h1>

            <div className="space-y-5 text-white/85 text-lg max-w-4xl">
              {sections[activeSection!].content.description.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* VIDEO — DIRECTLY CONNECTED TO TEXT */}
          <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden bg-black">
            <video
              src={heroVideo}
              className="w-full h-[420px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>


            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-foreground">
              Get Started
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>

        </div>
      </section>

      <Footer darkTheme />
    </div>
  );
};

export default Careers;
