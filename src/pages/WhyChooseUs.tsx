import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";

const WhyChooseUs = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <ScrollProgress />

      <main className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-stretch rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
            {/* Left panel set to solid black */}
            <div
              className="relative min-h-[520px] bg-black"
            >
              {/* big number (tinted so it's visible on both white and blue) */}
              <div className="absolute inset-y-10 left-6 flex flex-col justify-between pointer-events-none">
                <span
                  className="text-8xl md:text-9xl font-black leading-none"
                  style={{ color: "rgba(255,255,255,0.12)" }}
                >
                  02
                </span>
              </div>

              {/* rotated label (tinted blue) */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <span
                  className="-rotate-90 text-5xl md:text-6xl font-black tracking-[0.18em]"
                  style={{ color: "rgba(255,255,255,0.22)" }}
                >
                  CHOOSE
                </span>
              </div>
            </div>

            {/* Right content card on black */}
            <div className="bg-black text-white p-10 md:p-12 lg:p-14 flex flex-col gap-6 border-l border-white/10">
              <div className="flex items-center gap-3 text-xs font-semibold tracking-wide uppercase text-white/70">
                <span className="h-2 w-2 rounded-full bg-white/80" />
                <span>ScaleX Studios</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-white">Why Choose Us?</h1>

              <p className="italic text-white/80">Your Growth is Our Priority!</p>

              <ul className="space-y-2 text-sm md:text-base text-white/90">
                <li>
                  <strong>Creative Innovation:</strong> Fresh, unique, high-impact designs that resonate with your audience.
                </li>
                <li>
                  <strong>Strategic Thinking:</strong> Every campaign is backed by research, trends, and insights to maximize engagement.
                </li>
                <li>
                  <strong>Tailored Solutions:</strong> Strategies customized to your goals for optimal results.
                </li>
                <li>
                  <strong>End-to-End Expertise:</strong> From concept to execution, we cover all branding and marketing needs.
                </li>
                <li>
                  <strong>Results-Driven Approach:</strong> Measurable success across every design, campaign, and strategy.
                </li>
              </ul>

              <p className="text-slate-700 leading-relaxed">
                At ScaleX Studios, we redefine creativity with purpose—bringing brands to life and delivering meaningful engagement.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
