import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

const WhyChooseUs = () => {
  const [count, setCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  const features = [
    {
      title: "Launch, learn, and earn back on your investment within 30 days",
      description: "Proven launch playbooks that keep CAC efficient while unlocking faster payback—so your spend fuels growth, not guesswork."
    },
    {
      title: "Built-for-startup launch and growth systems",
      description: "We help ScaleX teams design, launch, and optimize experiences that convert—without guessing. Strategy, UX, and funnels tailored to your next growth milestone."
    },
    {
      title: "Now booking this quarter",
      description: "70+ launches delivered for startup teams—helping SaaS and service brands capture more clients with experiences that convert."
    }
  ];

  const values = [
    "Partner-first approach",
    "Data-led decisions",
    "Relentlessly iterative process",
    "Clarity in execution",
    "Momentum building",
    "Measurable results"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setSlideUp(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 70;
      const duration = 3000; // 3 seconds
      const incrementTime = 20;
      const increment = (end / duration) * incrementTime;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Header />
      <ScrollProgress />

      <main className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-24">
            <div className="mb-8">
              <span className="text-brand-orange font-medium">WHY CHOOSE US</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-tight">
              SCALEX STUDIOS
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-orange mb-10 max-w-4xl mx-auto">
              We design for growth, built for measurable results
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Growth-driven design partners for SaaS and service brands ready to level up focused on strategy, results, and unlocking what's next.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-24">
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-brand-orange pl-6 py-2">
                  <h3 className="text-2xl font-bold text-black mb-6">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center">
                Partner-first, data-led, and relentlessly iterative—ScaleX Studios delivers clarity, momentum, and results you can measure.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="border-l-2 border-brand-orange pl-4 py-1">
                    <span className="text-black text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section 
            ref={statsRef} 
            className={`text-center py-16 border-t border-gray-200 transition-all duration-1000 ease-out ${
              slideUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex items-center justify-center gap-6">
              <div className="relative">
                <span className="text-7xl md:text-8xl font-black text-brand-orange animate-pulse">
                  {count}
                </span>
                <span className="absolute -top-2 -right-2 text-4xl text-black">+</span>
              </div>
              <div className="text-left">
                <span className="text-2xl md:text-3xl font-bold text-black block">launches delivered</span>
                <span className="text-brand-orange text-lg">for startup teams worldwide</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;