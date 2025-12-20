import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    step: "01",
    title: "Web Development",
    subtitle: "Scalable, high-performance websites",
    description: "We build modern, responsive websites that scale with your business. From custom web applications to e-commerce platforms, we deliver solutions that perform.",
  },
  {
    step: "02",
    title: "Digital Marketing",
    subtitle: "Growth-driven campaigns & strategy",
    description: "Data-driven marketing strategies that maximize ROI. We create campaigns that reach the right audience at the right time, driving measurable growth.",
  },
  {
    step: "03",
    title: "Video Production & Motion Graphics",
    subtitle: "Cinematic storytelling & animation",
    description: "Award-winning video production and motion graphics that amplify your brand message. From concept to delivery, we bring your vision to life.",
  },
  {
    step: "04",
    title: "Meme Marketing",
    subtitle: "Viral content that connects",
    description: "Leverage the power of memes to connect with your audience authentically. We create shareable content that drives engagement and brand awareness.",
  },
  {
    step: "05",
    title: "Content Marketing",
    subtitle: "Strategic content that converts",
    description: "Content strategies that engage, educate, and convert. We create valuable content that positions your brand as a thought leader in your industry.",
  },
  {
    step: "06",
    title: "Ad Production",
    subtitle: "High-converting ad creatives",
    description: "Compelling ad creatives that stop the scroll and drive action. We produce ads across all platforms that deliver results and maximize ad spend efficiency.",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2); // Show 2 cards at a time

  const currentService = services[currentIndex];
  const maxIndex = services.length - visibleCards;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Top Section: Title and Explanation */}
          <div className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Main Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                ScaleX Services,
                <br />
                Built to Perform
              </h1>
            </div>

            {/* Right: Explanation Block */}
            <div className="flex flex-col items-start md:items-end">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white text-xs md:text-sm font-medium mb-4">
                How it Works
              </div>
              <p className="text-base md:text-lg text-white max-w-md text-left md:text-right leading-relaxed">
                We design and execute scalable digital systems that help modern brands grow with clarity and consistency.
              </p>
            </div>
          </div>

          {/* Card Slider Section */}
          <div className="relative">
            {/* Cards and Description Container - Side by Side */}
            <div>
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 items-start">
                {/* Step Cards Slider */}
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                    }}
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 px-2"
                        style={{ width: `${100 / visibleCards}%` }}
                      >
                        <div
                          onClick={() => handleCardClick(index)}
                          className={`bg-black border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg cursor-pointer transition-all duration-300 ${
                            index === currentIndex
                              ? "ring-2 ring-purple-500"
                              : "hover:shadow-xl opacity-90"
                          }`}
                        >
                          {/* Step Label */}
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs md:text-sm font-semibold">
                              {service.step}
                            </span>
                          </div>

                          {/* Abstract Graphic - Tunnel/Concentric Tubes Design */}
                          <div className="mb-4 h-32 md:h-40 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-pink-900/30 rounded-xl flex items-center justify-center overflow-hidden relative border border-white/10">
                            {index === 0 ? (
                              // For the first service (Web Development), show the provided image
                              <img 
                                src="https://cdn.cosmos.so/78c03f2d-18ee-4896-94da-c07cbd7d394d?format=jpeg" 
                                alt="Web Development" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : index === 1 ? (
                              // For the second service (Digital Marketing), show the provided image
                              <img 
                                src="https://cdn.cosmos.so/ddb34755-6c4a-4ced-b461-f41324e13523?format=jpeg" 
                                alt="Digital Marketing" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : index === 2 ? (
                              // For the third service (Video Production & Motion Graphics), show the provided image
                              <img 
                                src="https://i.pinimg.com/736x/cd/69/b9/cd69b9a224121cf3b0b23e75d27b6092.jpg" 
                                alt="Video Production & Motion Graphics" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : index === 3 ? (
                              // For the fourth service (Meme Marketing), show the provided image
                              <img 
                                src="https://i.pinimg.com/736x/c3/9b/aa/c39baaa39951f57c107734f6aed89149.jpg" 
                                alt="Meme Marketing" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : index === 4 ? (
                              // For the fifth service (Content Marketing), show the provided image
                              <img 
                                src="https://i.pinimg.com/736x/4b/0c/b3/4b0cb3935024aaef562942dd1213725e.jpg" 
                                alt="Content Marketing" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : index === 5 ? (
                              // For the sixth service (Ad Production), show the provided image
                              <img 
                                src="https://i.pinimg.com/736x/3c/8a/d6/3c8ad6e9a90db3f8258a7abef45dd300.jpg" 
                                alt="Ad Production" 
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : (
                              // For other services, keep the abstract SVG design
                              <svg
                                viewBox="0 0 320 180"
                                className="w-full h-full"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <defs>
                                  <linearGradient id={`gradient1-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
                                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
                                  </linearGradient>
                                  <linearGradient id={`gradient2-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                                  </linearGradient>
                                  <linearGradient id={`gradient3-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                                  </linearGradient>
                                  <linearGradient id={`gradient4-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                                  </linearGradient>
                                </defs>
                                {/* Curved tunnel/tube shapes */}
                                <path
                                  d="M40 90 Q80 60, 120 90 T200 90 T280 90"
                                  stroke={`url(#gradient1-${index})`}
                                  strokeWidth="12"
                                  fill="none"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M50 110 Q90 80, 130 110 T210 110 T290 110"
                                  stroke={`url(#gradient2-${index})`}
                                  strokeWidth="10"
                                  fill="none"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M60 130 Q100 100, 140 130 T220 130 T300 130"
                                  stroke={`url(#gradient3-${index})`}
                                  strokeWidth="8"
                                  fill="none"
                                  strokeLinecap="round"
                                />
                                {/* Organic top edge shape */}
                                <path
                                  d="M20 70 Q60 50, 100 70 Q140 50, 180 70 Q220 50, 260 70 Q300 50, 320 70"
                                  stroke={`url(#gradient4-${index})`}
                                  strokeWidth="6"
                                  fill="none"
                                  strokeLinecap="round"
                                />
                              </svg>
                            )}
                          </div>

                          {/* Service Info - Subtitle above Title */}
                          <div className="mb-4">
                            <p className="text-xs md:text-sm text-white/70 font-medium mb-1">
                              {service.subtitle}
                            </p>
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {service.title}
                            </h3>
                          </div>

                          {/* Next Button on Step Cards - Show on second card when first is active */}
                          {index === currentIndex + 1 && index < services.length && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                              }}
                              className="w-full mt-4 px-4 py-2 border-2 border-white/40 rounded-lg text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                              Next <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description Card - Side by Side */}
                <div className="bg-black border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg">
                  <p className="text-base md:text-lg text-white leading-relaxed mb-6">
                    {currentService.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm md:text-base hover:bg-white/90 transition-colors">
                    Get Started
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  
                  {/* Navigation Arrows - Below Description Box */}
                  <div className="mt-6 flex flex-col gap-2">
                    <button
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        currentIndex === 0
                          ? "border-white/20 bg-white/5 text-white/40 cursor-not-allowed"
                          : "border-white/40 bg-black text-white hover:bg-white/10"
                      }`}
                      aria-label="Previous card"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentIndex >= maxIndex}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        currentIndex >= maxIndex
                          ? "border-white/20 bg-white/5 text-white/40 cursor-not-allowed"
                          : "border-white/40 bg-black text-white hover:bg-white/10"
                      }`}
                      aria-label="Next card"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer darkTheme />
    </div>
  );
};

export default Services;
