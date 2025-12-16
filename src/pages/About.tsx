import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to ensure proper calculations
    ScrollTrigger.refresh();

    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Story section animation
    if (storyRef.current) {
      gsap.fromTo(storyRef.current, 
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Mission section animation
    if (missionRef.current) {
      gsap.fromTo(missionRef.current, 
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Values section animation
    if (valuesRef.current) {
      gsap.fromTo(valuesRef.current.children, 
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Approach section animation
    if (approachRef.current) {
      gsap.fromTo(approachRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: approachRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black">
      <Header />
      <ScrollProgress />

      <main className="relative z-10 py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Simple Hero */}
          <section ref={heroRef} className="mb-16 text-center">
            <h1 className="text-6xl font-black text-black mb-6">
              About Us
            </h1>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              We create meaningful digital experiences that help brands grow and connect with their audiences.
            </p>
          </section>

          {/* Story Section */}
          <section ref={storyRef} className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2018, ScaleX Studios began with a simple idea: great design should be accessible to every business, 
                regardless of size. What started as a small team of passionate designers and developers has grown into 
                a full-service digital agency.
              </p>
              <p>
                Today, we work with startups and established companies alike, helping them navigate the digital landscape 
                and create products that people love to use.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section ref={missionRef} className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 italic">
              "To empower brands with thoughtful design and strategic thinking that drives real business results."
            </p>
          </section>

          {/* Values Section */}
          <section ref={valuesRef} className="mb-16">
            <h2 className="text-4xl font-bold text-black mb-8">
              What We Believe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-orange pl-6 py-2">
                <h3 className="text-2xl font-bold text-black mb-4">Design with Purpose</h3>
                <p className="text-gray-600">
                  Every pixel serves a purpose. We create intentional designs that solve real problems.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6 py-2">
                <h3 className="text-2xl font-bold text-black mb-4">Build for People</h3>
                <p className="text-gray-600">
                  Technology should enhance human experiences, not complicate them.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6 py-2">
                <h3 className="text-2xl font-bold text-black mb-4">Embrace Simplicity</h3>
                <p className="text-gray-600">
                  The simplest solution is often the most powerful one.
                </p>
              </div>
              <div className="border-l-4 border-brand-orange pl-6 py-2">
                <h3 className="text-2xl font-bold text-black mb-4">Continuous Learning</h3>
                <p className="text-gray-600">
                  The digital landscape evolves rapidly, and so do we.
                </p>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section ref={approachRef}>
            <h2 className="text-4xl font-bold text-black mb-8">
              How We Work
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                We believe in collaboration over hierarchy, transparency over assumptions, and results over promises. 
                Our process is flexible and adapts to each project's unique needs.
              </p>
              <p>
                From initial concept to final delivery, we work closely with our clients as partners, not vendors. 
                This approach has led to long-term relationships and successful outcomes for businesses across industries.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;