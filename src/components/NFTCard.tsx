import { useEffect, useRef, useState } from "react";

const NFTCard: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen py-16 overflow-hidden bg-black text-white"
    >
      {/* Horizontal grid lines */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-gray-300"
            style={{ top: `${i * 4}%`, height: '1px' }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1600px] px-8 lg:px-16">
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main text layout */}
          <div className="relative pt- pb-32 lg:pb-32 space-y-16 lg:space-y-16">
            {/* Top row */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <span 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic text-white leading-tight block"
                  style={{
                    textShadow: '0.5px 0.5px 0px rgba(255, 255, 255, 0.9), -0.5px -0.5px 0px rgba(255, 255, 255, 0.9), 0.5px -0.5px 0px rgba(255, 255, 255, 0.9), -0.5px 0.5px 0px rgba(255, 255, 255, 0.9)',
                    letterSpacing: '-0.03em',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  DEVELOPMENT +
                </span>
              </div>
              <div className="flex-grow lg:pl-8">
                <span 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic block leading-tight" 
                  style={{ 
                    color: '#E8DCC6',
                    letterSpacing: '-0.03em',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  WEB & BRANDING
                </span>
              </div>
            </div>

            {/* Second row */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-8 lg:gap-12">
              <div className="flex-shrink-0">
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight block">
                 
                  FOR GROWING BRANDS
                  <span className="text-2xl md:text-3xl align-super ml-1">©</span>
                </span>
              </div>
              <div className="flex-grow lg:pl-8">
                <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white block leading-tight">
                FOCUSED ON

                </span>
              </div>
            </div>

            {/* Third row */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-start gap-8 lg:gap-12">
              <div className="hidden lg:block lg:w-1/3 flex-shrink-0"></div>
              <div className="flex-grow lg:pl-8">
                <span 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light italic block leading-tight" 
                  style={{ 
                    color: '#E8DCC6',
                    letterSpacing: '-0.03em',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  HIGH-PERFORMANCE
DIGITAL PRODUCTS

                </span>
              </div>
            </div>
          </div>

          {/* Bottom left labels */}
          <div className={`mt-16 lg:mt-0 lg:absolute lg:bottom-8 left-8 lg:left-16 space-y-1.5 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <div className="text-sm lg:text-base text-gray-300 leading-relaxed">
              <span className="font-normal">WEB:</span> <span className="text-gray-100 ml-1">SCALEX STUDIOS</span>
            </div>
            <div className="text-sm lg:text-base text-gray-300 leading-relaxed">
              <span className="font-normal">UX/UI:</span> <span className="text-gray-100 ml-1">IN-HOUSE</span>
            </div>
         
            <div className="text-sm lg:text-base text-gray-300 leading-relaxed">
              <span className="font-normal">STRATEGY:</span> <span className="text-gray-100 ml-1">CONTENT & GROWTH</span>
            </div>
            <div className="text-sm lg:text-base text-gray-300 leading-relaxed">
              <span className="font-normal">PLATFORMS:</span> <span className="text-gray-100 ml-1">INSTAGRAM / META / LINKEDIN</span>
            </div>
            <div className="text-sm lg:text-base text-gray-300 leading-relaxed">
              <span className="font-normal">EXECUTION:</span> <span className="text-gray-100 ml-1">CREATIVE + ANALYTICS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCard;