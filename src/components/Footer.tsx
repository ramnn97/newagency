import { Instagram, Twitter, Linkedin, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  darkTheme?: boolean;
  blueTheme?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkTheme = false, blueTheme = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const useLightText = darkTheme || blueTheme;
  const backgroundColor = darkTheme ? "#000000" : "rgb(51, 0, 255)";

  return (
    <footer
      id="contact"
      className={`relative py-16 overflow-hidden ${useLightText ? "text-white" : "text-black"}`}
      style={darkTheme ? { backgroundColor } : undefined}
    >
      {/* Premium gradient background for all non-dark themes */}
      {!darkTheme && (
        <>
          {/* Base diagonal gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3B1CFF] via-[#2B0FB8] to-[#1C0A8F]" />

          {/* Additional radial glows for extra depth */}
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_50%_0%,rgba(129,140,248,0.45),transparent_60%)]" />

          {/* Very subtle grain/texture overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.0)_40%,rgba(0,0,0,0.15)_60%,rgba(255,255,255,0.03)_100%)]" />
        </>
      )}

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="space-y-6">
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${useLightText ? "text-white" : ""}`}>
              Your Brand&apos;s
              <br />
              <span className={useLightText ? "text-indigo-100" : "text-purple-300"}>Creative</span> Partner
            </h3>
            <p className={`text-sm md:text-base ${useLightText ? "text-indigo-100/80" : "text-white"}`}>
              Reach us at{" "}
              <a
                href="mailto:hello@scalexstudios.com"
                className={`border-b border-transparent pb-0.5 ${useLightText ? "text-indigo-50 hover:text-white hover:border-indigo-50" : "text-white hover:text-white"} transition-colors`}
              >
                hello@scalexstudios.com
              </a>
            </p>

            <div className="space-y-2">
              <h4 className={`text-sm md:text-base font-semibold tracking-wide ${useLightText ? "text-indigo-100" : "text-white"}`}>Pune</h4>
              <p className={`text-xs md:text-sm ${useLightText ? "text-indigo-100/80" : "text-white"} font-medium`}>
                Mukai Chowk
                <br />
                Pune 411001
              </p>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="space-y-8">
            <div>
              <h4 className={`text-sm md:text-base font-semibold tracking-[0.18em] uppercase mb-4 ${useLightText ? "text-indigo-100/80" : "text-white"}`}>
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="group">
                  <a
                    href="#about"
                    className={`relative inline-flex items-center ${useLightText ? "text-indigo-100/80" : "text-white"} transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    <span>About</span>
                    <span className="ml-1 h-px w-4 origin-left scale-x-0 bg-indigo-100/80 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#projects"
                    className={`relative inline-flex items-center ${useLightText ? "text-indigo-100/80" : "text-white"} transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    <span>Projects</span>
                    <span className="ml-1 h-px w-4 origin-left scale-x-0 bg-indigo-100/80 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className={`relative inline-flex items-center ${useLightText ? "text-indigo-100/80" : "text-white"} transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    <span>Contact</span>
                    <span className="ml-1 h-px w-4 origin-left scale-x-0 bg-indigo-100/80 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blogs"
                    className={`relative inline-flex items-center ${useLightText ? "text-indigo-100/80" : "text-white"} transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    <span>Blogs</span>
                    <span className="ml-1 h-px w-4 origin-left scale-x-0 bg-indigo-100/80 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#policy"
                    className={`relative inline-flex items-center ${useLightText ? "text-indigo-100/80" : "text-white"} transition-transform duration-200 group-hover:translate-x-0.5`}
                  >
                    <span>Policy</span>
                    <span className="ml-1 h-px w-4 origin-left scale-x-0 bg-indigo-100/80 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Social + CTA */}
          <div className="space-y-5">
            <div>
              <h4 className={`text-xl md:text-2xl font-semibold ${useLightText ? "text-white" : "text-purple-300"}`}>
                Check Us Out Here
              </h4>
              <p className={useLightText ? "text-indigo-100/80 text-sm md:text-base" : "text-white text-sm md:text-base"}>
                Join our creative team and make magic happen!
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/scalexstudios/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-indigo-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-indigo-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-indigo-50 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            {/* Footer CTA */}
            <div className="pt-2 space-y-2">
              <p className="text-xs md:text-sm text-indigo-100/80">Have a project in mind?</p>
              <button
                type="button"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-indigo-50 transition duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>

        <div
          className={`border-t ${useLightText ? "border-indigo-100/30" : "border-white/10"} pt-6 text-center text-xs md:text-sm ${
            useLightText ? "text-indigo-100/80" : "text-white/80"
          }`}
        >
          <p>&copy; 2025 ScaleX Studios. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur-md transition duration-200 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] lg:flex"
        aria-label="Scroll to top"
      >
        <div className="flex flex-col items-center">
          <ArrowUp className="h-4 w-4" />
          <span className="text-[10px] font-semibold">Up</span>
        </div>
      </Button>

      <div
        className={`pointer-events-none absolute bottom-4 right-4 text-2xl md:text-3xl font-bold ${
          useLightText ? "text-indigo-100/80" : "text-white"
        } drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]`}
      >
        05
      </div>
    </footer>
  );
};