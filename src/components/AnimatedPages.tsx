import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import YellowPage from "./YellowPage";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedPages = () => {
  useEffect(() => {
    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Animation for page 4 (blue)
    const page4Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page4",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        anticipatePin: 1
      }
    });

    page4Timeline
      .fromTo(".page4 h1", {
        x: "100%",
        opacity: 0,
        scale: 0.8,
        rotationY: 90
      }, {
        x: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(".page4 h1", {
        x: "-150%",
        rotation: 180,
        duration: 2,
        ease: "none"
      });

    // Animation for page 5 (white)
    const page5Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".page5",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        anticipatePin: 1
      }
    });

    page5Timeline
      .fromTo(".page5 h1", {
        x: "100%",
        opacity: 0,
        rotationX: 90,
        scale: 0.5
      }, {
        x: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)"
      })
      .to(".page5 h1", {
        x: "-150%",
        rotation: -180,
        duration: 2,
        ease: "none"
      });

    // Refresh ScrollTrigger after setting up animations
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <YellowPage />
      
      {/* Page 4 - Solid Blue */}
      <section className="page4 h-screen w-full bg-blue-500 flex items-center justify-center overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-black text-white whitespace-nowrap">
          BLUE
        </h1>
      </section>

      {/* Page 5 - Solid White */}
      <section className="page5 h-screen w-full bg-white flex items-center justify-center overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-black text-black whitespace-nowrap">
          WHITE
        </h1>
      </section>
    </div>
  );
};

export default AnimatedPages;