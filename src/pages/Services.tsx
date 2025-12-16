import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Strategic Brand Vision",
    description: "Comprehensive brand identity development with market positioning and visual storytelling that resonates with your target audience.",
    icon: "🎨",
    features: ["Brand Identity", "Market Positioning", "Visual Storytelling"]
  },
  {
    title: "Immersive Digital Experiences",
    description: "Cutting-edge web and mobile solutions designed to captivate users and drive meaningful engagement across all touchpoints.",
    icon: "🌐",
    features: ["Web Development", "Mobile Apps", "User Experience"]
  },
  {
    title: "Dynamic Content Creation",
    description: "Award-winning video production, motion graphics, and multimedia content that amplifies your brand message.",
    icon: "🎬",
    features: ["Video Production", "Motion Graphics", "Content Strategy"]
  },
  {
    title: "Performance Marketing",
    description: "Data-driven campaigns that maximize ROI through precision targeting, conversion optimization, and measurable results.",
    icon: "📈",
    features: ["Campaign Strategy", "Analytics", "ROI Optimization"]
  },
  {
    title: "Innovative Design Systems",
    description: "Scalable design frameworks that ensure consistency across all platforms while maintaining creative flexibility.",
    icon: "📐",
    features: ["Design Systems", "UI Libraries", "Brand Guidelines"]
  },
  {
    title: "Future-Ready Technology",
    description: "Advanced development solutions leveraging emerging technologies to keep your brand ahead of the competition.",
    icon: "🚀",
    features: ["AI Integration", "AR/VR Solutions", "Blockchain Tech"]
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Animate section entrance with professional polish
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate main title with sophisticated 3D entrance
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, rotationY: 60, scale: 0.9 },
        {
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.4,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate subtitle with elegant fade
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Animate service cards with staggered professional entrance
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref,
          { opacity: 0, y: 60, rotationX: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1.1,
            delay: index * 0.15,
            ease: "expo.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 95%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Animate CTA section with premium entrance
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Add subtle continuous animation to icons
    const icons = document.querySelectorAll('.service-icon');
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -8,
        rotation: 5,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2
      });
    });

    // Add sophisticated hover animations to service cards
    serviceRefs.current.forEach((ref) => {
      if (ref) {
        const onMouseEnter = () => {
          gsap.to(ref, {
            y: -15,
            rotationX: 5,
            scale: 1.03,
            duration: 0.5,
            ease: "power3.out",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          });
          
          // Animate icon on hover
          const icon = ref.querySelector('.service-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 15,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        const onMouseLeave = () => {
          gsap.to(ref, {
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          });
          
          // Reset icon animation
          const icon = ref.querySelector('.service-icon');
          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 5,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        ref.addEventListener('mouseenter', onMouseEnter);
        ref.addEventListener('mouseleave', onMouseLeave);

        // Cleanup listeners
        return () => {
          ref.removeEventListener('mouseenter', onMouseEnter);
          ref.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Header />
      <ScrollProgress />

      <main className="relative z-10 py-32">
        <div ref={sectionRef} className="container mx-auto px-6">
          <div className="text-center mb-28">
            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-pink-500 to-purple-500">
                PREMIUM SERVICES
              </span>
            </h1>
            <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Elevating brands through visionary design and cutting-edge technology solutions that drive measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                ref={el => serviceRefs.current[index] = el}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/70 transition-all duration-500 cursor-pointer shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl service-icon transition-transform duration-300">{service.icon}</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-orange to-pink-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1 bg-gray-700/50 rounded-full text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium CTA Section */}
          <div ref={ctaRef} className="mt-32 text-center max-w-5xl mx-auto">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-pink-500 to-purple-500 rounded-lg blur opacity-75"></div>
              <button className="relative bg-gray-900 text-white font-bold py-5 px-16 rounded-lg text-xl tracking-wide hover:bg-transparent transition-all duration-500 transform hover:scale-105">
                INITIATE COLLABORATION
              </button>
            </div>
            <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
              Partner with us to transform your vision into extraordinary digital experiences that captivate audiences and drive sustainable growth.
            </p>
          </div>
        </div>
      </main>

      <Footer darkTheme />
    </div>
  );
};

export default Services;