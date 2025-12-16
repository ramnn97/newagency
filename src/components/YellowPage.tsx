import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const YellowPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Main timeline for the yellow page animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".yellow-page",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
        anticipatePin: 1
      }
    });

    // Animate the main heading with entrance effect
    if (headingRef.current) {
      tl.fromTo(headingRef.current, {
        x: "100vw",
        opacity: 0,
        rotationY: 90,
        scale: 0.5
      }, {
        x: 0,
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      })
      .to(headingRef.current, {
        x: "-150%",
        rotation: 360,
        duration: 2,
        ease: "none"
      }, "+=0.5");
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="yellow-page h-screen w-full bg-yellow-400 flex items-center justify-center overflow-hidden"
    >
      <h1 
        ref={headingRef}
        className="yellow-heading text-7xl md:text-9xl font-black text-black whitespace-nowrap"
      >
        YELLOW
      </h1>
    </section>
  );
};

export default YellowPage;