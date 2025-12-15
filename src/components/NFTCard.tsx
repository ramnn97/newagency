import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logow from "@/assets/logow.jpeg";
import card3 from "@/assets/card3.jpg";
import card2 from "@/assets/card2.png";

const NFTCard: React.FC = () => {
  // Generate placeholder images
  const placeholderImage = (text: string, width: number = 400, height: number = 300) => 
    `https://placehold.co/${width}x${height}/333333/FFFFFF?text=${encodeURIComponent(text)}`;
  
  const communityTags = ['P1', 'P2', 'P3', 'P4'];

  return (
    <section className="min-h-screen bg-background relative">
      <div className="w-full h-full">
        <div className="bg-navy-900 min-h-screen w-full px-4 md:px-12 lg:px-16 py-12 lg:py-16 shadow-2xl">
          {/* Large rounded container in the center */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 h-full">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12 pt-12">
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-10 md:p-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Geometric']">
                    We Transform Brands Into Digital Growth Engines
                  </h1>
                  <p className="text-gray-600 font-medium">
                  Stop guessing. Start scaling
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-white"></div>
                  <div className="relative w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center">
                    <img 
                      src={logow} 
                      alt="Portrait" 
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                <a 
                  href="https://www.instagram.com/scalexstudios/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-6 text-lg font-bold rounded-full flex items-center gap-2 transition-colors hover:bg-white/10"
                >
                  Go to Insta
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Middle Section (Two Columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="border-2 border-yellow-500 rounded-2xl p-8">
                  <img 
                    src={card2} 
                    alt="Model" 
                    className="w-full rounded-xl"
                  />
                </div>
                <p className="text-white text-center font-medium">
                We don't just grow brands — we engineer digital ecosystems that scale.
                </p>
                
                <div className="rounded-2xl p-8">
                  <img 
                    src={card3} 
                    alt="Unique Products" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
              
              {/* Right Column */}
              <div className="rounded-2xl p-10">
                <div className="rounded-xl overflow-hidden">
                  <video 
                    src="./src/assets/cardvideo.MOV" 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-700">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className=""></div>
                  <span className="text-white font-medium"></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className=""></div>
                  <span className="text-white font-medium"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-3xl md:text-4xl font-bold text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]">
        02
      </div>
    </section>
  );
};

export default NFTCard;