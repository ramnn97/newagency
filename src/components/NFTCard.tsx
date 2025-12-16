import { useEffect, useRef, useState } from "react";

const NFTCard: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state every time the section enters or exits the viewport
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top header */}
        <div className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6">
            <span className="text-brand-orange font-medium">ScaleX Studios</span>
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                We design for growth,
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight text-brand-orange">
                built for measurable results
              </h3>
            </div>
          </div>

          <p className="max-w-md text-lg text-gray-600 leading-relaxed lg:text-right">
            Growth-driven design partners for SaaS and service brands ready to level up focused on strategy, results, and unlocking what's next.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left column */}
          <div className={`lg:col-span-1 transition-all duration-1000 ease-out delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="border-l-2 border-brand-orange pl-6 py-2">
              <h3 className="text-2xl font-bold text-black mb-4">
                Launch, learn, and earn back on your investment within 30 days
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Proven launch playbooks that keep CAC efficient while unlocking
                faster payback—so your spend fuels growth, not guesswork.
              </p>
            </div>
          </div>

          {/* Center column */}
          <div className={`lg:col-span-1 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="border-l-2 border-brand-orange pl-6 py-2">
              <h3 className="text-2xl font-bold text-black mb-4">
                Built-for-startup launch and growth systems
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We help ScaleX teams design, launch, and optimize experiences that
                convert—without guessing. Strategy, UX, and funnels tailored to
                your next growth milestone.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className={`lg:col-span-1 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="border-l-2 border-brand-orange pl-6 py-2">
              <h3 className="text-2xl font-bold text-black mb-4">
                70+ launches delivered for startup teams
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Helping SaaS and service brands capture more clients with experiences that convert.
              </p>
              <p className="text-base text-gray-700 leading-relaxed italic">
                Partner-first, data-led, and relentlessly iterative—ScaleX Studios delivers clarity, momentum, and results you can measure.
              </p>
            </div>
          </div>
        </div>
        
        {/* Booking Status */}
        <div className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-lg font-medium text-black">Now booking this quarter</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCard;