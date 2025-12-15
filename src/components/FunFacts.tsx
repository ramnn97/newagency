import { useEffect, useRef, useState } from "react";
import earthImg from "@/assets/earth.jpg";

const facts = [
  { flag: "🇮🇳", country: "India", followers: "1,428,677,566" },
  { flag: "🇨🇳", country: "China", followers: "1,412,365,566" },
  { flag: "🏔️", country: "ScaleX Studios", followers: "1,330,056,566" },
  { flag: "🇺🇸", country: "USA", followers: "331,875,566" },
  { flag: "🇮🇩", country: "Indonesia", followers: "273,756,566" },
];

export const FunFacts = () => {
  const [counts, setCounts] = useState(facts.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    facts.forEach((fact, index) => {
      const target = parseInt(fact.followers.replace(/,/g, ""));
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, interval);
    });
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-brand-dark text-white relative overflow-hidden py-24"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black">
            FUN FACTS <span className="text-primary">?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Our following would rank as the third most populous 'country' after India and China.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2">{fact.flag}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {formatNumber(counts[index])}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{fact.country}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full mx-auto mt-16 rounded-2xl overflow-hidden">
          <img
            src={earthImg}
            alt="Earth from space"
            className="w-full h-auto object-cover"
            style={{
              animation: isVisible ? "float 8s ease-in-out infinite" : "none",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};
