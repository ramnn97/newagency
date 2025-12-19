import React from "react";

const steps = [
  {
    number: "01",
    title: "Strategy & Research",
    description: "Audience research, positioning, and channel strategy.",
  },
  {
    number: "02",
    title: "Creative & Content",
    description: "Content systems, creatives, and messaging built for scale.",
  },
  {
    number: "03",
    title: "Production & Execution",
    description: "Publishing, optimization, and platform-specific execution.",
  },
  {
    number: "04",
    title: "Reach & Growth",
    description: "Distribution, analytics, and continuous performance improvement.",
  },
];

export const CaseStudies = () => {
  return (
    <section id="think" className="bg-[#050509] text-white py-24">
      <div className="container mx-auto px-6 space-y-12">
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 border border-white/30 rounded-full text-sm font-semibold tracking-tight">
            ScaleX Studios
          </span>
          <div className="h-[2px] flex-1 bg-white/20" />
        </div>

        <div className="space-y-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            THINK
          </h2>
          <div className="h-[3px] w-24 bg-white" />
          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
            Our approach combines user, business and stakeholder requirements
            through different creative production stages to create endline
            digital experience, and we are confident that this approach will
            drive the project to success.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative overflow-hidden rounded-[32px] bg-violet-600 px-7 py-8 md:px-12 md:py-10 min-h-[190px] md:min-h-[220px] lg:min-h-[250px] shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
              >
                <div className="relative flex h-full items-center justify-between gap-4 md:gap-8">
                  {/* Big step number on the left */}
                  <div className="pointer-events-none select-none text-[7rem] md:text-[8rem] lg:text-[9rem] font-black leading-none text-[#D5FF3F]">
                    {step.number}
                  </div>

                  {/* Right-aligned content */}
                  <div className="ml-auto text-right space-y-2 md:space-y-3 max-w-xs md:max-w-sm">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base text-violet-50/90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};