import { Rocket, Globe, Star, Moon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import sxsLogo from "@/assets/sxs-logo.jpeg";
import SparklesText from "@/components/SparklesText";
import Silk from "@/components/Silk";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-24 pb-16">
      {/* Silk background - Hero section only */}
      <div className="absolute inset-0 z-[-1]">
        <Silk speed={5} scale={1} color="#2563EB" noiseIntensity={1.5} rotation={0} />
      </div>
      
      {/* Content container */}
      <div className="relative z-10">
        {/* Floating decorative icons */}
        <div className="absolute top-32 left-12 animate-float opacity-30">
          <Moon className="w-8 h-8" />
        </div>
        <div className="absolute top-48 right-1/4 animate-float opacity-20" style={{ animationDelay: "1s" }}>
          <Rocket className="w-12 h-12" />
        </div>
        <div className="absolute top-1/3 right-12 animate-float opacity-25" style={{ animationDelay: "2s" }}>
          <Globe className="w-10 h-10" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float opacity-20" style={{ animationDelay: "3s" }}>
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-32 right-1/3 animate-float opacity-15" style={{ animationDelay: "1.5s" }}>
          <Sparkles className="w-8 h-8" />
        </div>
      
        <div className="absolute bottom-16 left-12 opacity-20" style={{ animationDelay: "2.5s" }}>
          <Star className="w-5 h-5 animate-pulse" />
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-1 gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Centered Headline */}
          <div className="space-y-8 flex flex-col items-center justify-center">
            <div className="space-y-4 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight flex flex-wrap items-center justify-center gap-4">
                <span className="animate-fade-in-up text-white">
                  WE
                </span>
                <span className="text-gradient animate-fade-in-up font-['Orbitron']">
                  CREATE
                </span>
                <span className="animate-fade-in-up text-white">
                  MEMORABLE
                </span>
                <span className="animate-fade-in-up text-white">
                  MOMENTS
                </span>
                <span className="animate-fade-in-up text-white">
                  FOR
                </span>
                <SparklesText 
                  text="BRANDS" 
                  colors={{ first: '#9E7AFF', second: '#FE8BBB' }}
                  sparklesCount={10}
                  className="text-2xl md:text-4xl lg:text-5xl font-black animate-fade-in-up text-white"
                />
              </h1>
              <div className="h-1 w-64 bg-white my-4 animate-fade-in-up mx-auto" />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <Button size="lg" className="text-base px-6 py-4 rounded-full hover-lift shadow-lg hover:shadow-xl">
                Let's Create Together
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]">
        
      </div>
    </section>
  );
};