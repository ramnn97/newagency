import { useState, useEffect, useRef } from "react";

const clients = [
  "AquaLogica", "ALT Balaji", "Clovia", "Balaji Wafers", "Realme",
  "Myntra", "Britannia Treat", "My11Circle", "Parachute", "Dream11",
  "Plum", "Tecno Mobile", "Protean", "Prime Video", "Harpic"
];

export const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      // Clone the children to create an infinite loop effect
      const children = Array.from(contentRef.current.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        contentRef.current?.appendChild(clone);
      });
    }
  }, []);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black">Our Besties</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            style={{
              WebkitTextStroke: "1px currentColor",
              color: "transparent",
            }}
          >
            The best ideas aren't made with clients, they're made with partners.
          </p>
        </div>

        {/* Infinite scroll logos */}
        <div ref={containerRef} className="relative overflow-hidden">
          <div 
            ref={contentRef}
            className="flex gap-8 animate-loop-scroll whitespace-nowrap"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 bg-muted rounded-xl flex items-center justify-center hover-lift"
              >
                <span className="text-xl font-bold text-center px-4">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};