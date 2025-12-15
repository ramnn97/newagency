import { Brain, Palette, Lightbulb, Clapperboard, Rocket } from "lucide-react";

const steps = [
  { label: "Strategy", Icon: Brain, left: "6%", top: "60%" },
  { label: "Creative", Icon: Palette, left: "26%", top: "32%" },
  { label: "Innovation", Icon: Lightbulb, left: "50%", top: "68%" },
  { label: "Production", Icon: Clapperboard, left: "73%", top: "38%" },
  { label: "Reach", Icon: Rocket, left: "92%", top: "60%" },
];

export const CaseStudies = () => {
  return (
    <section id="think" className="bg-white text-black py-24">
      <div className="container mx-auto px-6 space-y-12">
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 border border-black rounded-full text-sm font-semibold">
            ScaleX Studios
          </span>
          <div className="h-[2px] flex-1 bg-black" />
        </div>

        <div className="space-y-6 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
            THINK
          </h2>
          <div className="h-[3px] w-24 bg-black" />
          <p className="text-lg leading-relaxed text-gray-800">
            Our approach combines user, business and stakeholder requirements
            through different creative production stages to create endline
            digital experience, and we are confident that this approach will
            drive the project to success.
          </p>
        </div>

        <div className="relative mt-8">
          <svg
            className="w-full h-64 md:h-80"
            viewBox="0 0 1400 400"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 260 C 200 120, 320 120, 480 260 C 640 400, 780 400, 940 260 C 1100 120, 1240 120, 1360 260"
              stroke="black"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute inset-0 pointer-events-none">
            {steps.map(({ label, Icon, left, top }) => (
              <div
                key={label}
                className="absolute -translate-x-1/2 text-center space-y-5"
                style={{ left, top }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#6A2FE0] bg-white shadow-lg">
                  <Icon className="h-8 w-8 text-[#6A2FE0]" strokeWidth={2.25} />
                </div>
                <div className="text-lg font-black uppercase tracking-tight mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <span className="absolute bottom-6 right-6 text-3xl md:text-4xl font-bold text-black">
            03
          </span>
        </div>
      </div>
    </section>
  );
};
