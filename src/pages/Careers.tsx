import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Careers = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "OUR",
      subtitle: "Services",
      label: "Our Services",
      content: {
        headline: "Comprehensive Solutions for Your Brand's Success",
        description: [
          "At ScaleX Studios, we offer a full spectrum of creative and marketing services designed to elevate your brand and drive measurable results. From strategic planning to creative execution, we provide end-to-end solutions that transform your vision into reality.",
          "Our services include video production & motion graphics, meme marketing, content marketing, ad production, web development, brand identity design, social media management, and digital strategy. We combine creativity with data-driven insights to deliver campaigns that resonate with your audience and achieve your business objectives."
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
          "We help businesses of all sizes build memorable brands and create meaningful connections with their audiences. Our team works closely with you to understand your goals, identify opportunities, and develop strategies that drive growth.",
          "Whether you need a complete brand overhaul, a viral marketing campaign, a stunning website, or engaging video content, we have the expertise and creativity to bring your ideas to life. We handle everything from concept to execution, ensuring every project meets the highest standards of quality and effectiveness."
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
          "Our approach combines strategic thinking with creative innovation. We start by understanding your business, your audience, and your goals. Then we craft tailored solutions that not only look great but also deliver real business value.",
          "We leverage the latest trends, technologies, and creative techniques to ensure your brand stands out in a crowded marketplace. With our expertise in digital marketing, creative production, and brand development, we help you build a strong online presence, engage your target audience, and achieve sustainable growth."
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {activeSection === null ? (
        // Initial cards view
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className="bg-card border border-border rounded-3xl p-12 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <h2 className="text-7xl font-bold text-brand-orange mb-4">
                    {section.title}
                  </h2>
                  <p className="text-2xl font-semibold text-foreground mb-12">
                    {section.subtitle}
                  </p>
                  <div className="flex items-center justify-start">
                    <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-8 h-8 text-background" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-foreground font-semibold text-lg px-8 py-6 rounded-full"
              >
                Get Started
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      ) : (
        // Detailed section view
        <section className="min-h-screen bg-black pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-4 mb-12 text-white/90 flex-wrap">
              {sections.map((section, index) => (
                <div key={index} className="flex items-center">
                  <button
                    onClick={() => setActiveSection(index)}
                    className={`transition-opacity hover:opacity-100 ${
                      activeSection === index ? 'opacity-100 font-semibold' : 'opacity-70'
                    }`}
                  >
                    {section.label}
                  </button>
                  {index < sections.length - 1 && (
                    <span className="mx-3 w-2 h-2 rounded-full bg-brand-orange"></span>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-8 -mt-8">
              <p className="text-white/80 text-sm uppercase tracking-wider mb-4">
                {sections[activeSection].label.toUpperCase()}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                {sections[activeSection].content.headline}
              </h1>
              <div className="space-y-6 text-white/90 text-lg max-w-4xl">
                {sections[activeSection].content.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Video placeholder */}
            <div className="mt-12 bg-gray-800 rounded-2xl aspect-video flex items-center justify-center">
              <p className="text-white/50">Featured Video Content</p>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={() => setActiveSection(null)}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                Back to Overview
              </Button>
              <Button
                className="bg-brand-orange hover:bg-brand-orange/90 text-foreground"
              >
                Get Started
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
