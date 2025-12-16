import React from "react";

const avatars = [
  { bg: "#e54e3b" },
  { bg: "#f59e0b" },
  { bg: "#10b981" },
  { bg: "#6366f1" },
  { bg: "#ec4899" },
];

const NFTCard: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f7f9] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        {/* Top header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              ScaleX Studios
            </span>
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-[#656565]">
                We design for growth,
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-[#1f1f1f]">
                built for measurable results
              </h3>
            </div>
          </div>

          <p className="max-w-sm text-sm md:text-base text-black leading-relaxed">
            Growth-driven design partners for SaaS and service brands ready to level up focused on strategy, results, and unlocking what’s next.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#0f0f0f] shadow-sm ring-1 ring-black/10 p-8 flex flex-col justify-between min-h-[340px]">
              <div className="text-sm text-white font-medium">
                Launch, learn, and earn back on your investment within 30 days
              </div>
              <div className="pt-2">
                <p className="text-base text-white/80 leading-relaxed">
                  Proven launch playbooks that keep CAC efficient while unlocking
                  faster payback—so your spend fuels growth, not guesswork.
                </p>
              </div>
            </div>
          </div>

          {/* Center column */}
          <div className="space-y-5 lg:col-span-4">
            <div className="rounded-2xl bg-white/80 shadow-sm ring-1 ring-gray-200 p-6 flex flex-col justify-between min-h-[260px]">
              <div className="text-sm text-[#1f1f1f] font-medium">
                Built-for-startup launch and growth systems
              </div>
              <div className="pt-4">
                <p className="text-base text-[#374151] leading-relaxed">
                  We help ScaleX teams design, launch, and optimize experiences that
                  convert—without guessing. Strategy, UX, and funnels tailored to
                  your next growth milestone.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-white/80 shadow-sm ring-1 ring-gray-200 p-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-gray-600">Now booking this quarter</span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-[#181818] text-white shadow-lg p-6 flex flex-col justify-between min-h-[340px]">
              <div className="space-y-3 text-sm leading-relaxed text-gray-200">
                <p className="text-gray-100">
                  70+ launches delivered for startup teams—helping SaaS and service brands capture more clients with experiences that convert.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-base text-white/85 leading-relaxed">
                  Partner-first, data-led, and relentlessly iterative—ScaleX Studios delivers clarity, momentum, and results you can measure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCard;