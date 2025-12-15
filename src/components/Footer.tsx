import { Instagram, Twitter, Linkedin, Youtube, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  darkTheme?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkTheme = false }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className={`py-16 relative ${darkTheme ? 'text-white' : 'text-black'}`}
      style={{ backgroundColor: darkTheme ? "#000000" : "rgb(51, 0, 255)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div className="space-y-6">
            <h3 className={`text-4xl md:text-5xl font-black ${darkTheme ? 'text-white' : ''}`}>
              Your Brand's
              <br />
              <span className={darkTheme ? "text-gray-300" : "text-purple-300"}>Creative</span> Partner
            </h3>
            <p className={`text-lg ${darkTheme ? 'text-gray-200' : 'text-white'}`}>
              Reach us at{" "}
              <a
                href="mailto:hello@scalexstudios.com"
                className={`underline ${darkTheme ? 'text-gray-200 hover:text-white' : 'text-white hover:text-white'} transition-colors`}
              >
                hello@scalexstudios.com
              </a>
            </p>

            <div className="space-y-2">
              <h4 className={`text-xl font-black ${darkTheme ? 'text-gray-200' : 'text-white'}`}>Pune</h4>
              <p className={`text-sm ${darkTheme ? 'text-gray-300' : 'text-white'} font-semibold`}>
                Mukai Chowk
                <br />
                Pune 411001
              </p>
            </div>
          </div>

          {/* Center: Quick links */}
          <div className="space-y-8">
            <div>
              <h4 className={`text-2xl font-bold mb-4 ${darkTheme ? 'text-gray-200' : 'text-white'}`}>Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'} transition-colors`}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'} transition-colors`}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'} transition-colors`}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#blogs" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'} transition-colors`}>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#policy" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'text-white hover:text-white'} transition-colors`}>
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Hiring CTA */}
          <div className="space-y-6">
            <h4 className={`text-3xl font-bold ${darkTheme ? 'text-gray-300' : 'text-purple-300'}`}>Check Us Out Here</h4>
            <p className={darkTheme ? 'text-gray-200' : 'text-white'}>Join our creative team and make magic happen!</p>

            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/scalexstudios/" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'hover:text-white'} transition-colors`}>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'hover:text-white'} transition-colors`}>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className={`${darkTheme ? 'text-gray-300 hover:text-white' : 'hover:text-white'} transition-colors`}>
                <Linkedin className="h-6 w-6" />
                </a>
            </div>
          </div>
        </div>

        <div className={`border-t ${darkTheme ? 'border-gray-800' : 'border-white/10'} pt-8 text-center text-sm ${darkTheme ? 'text-gray-500' : 'text-white/80'}`}>
          <p>&copy; 2025 ScaleX Studios. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary hover:bg-secondary shadow-lg z-30 hidden lg:flex"
        aria-label="Scroll to top"
      >
        <div className="flex flex-col items-center">
          <ArrowUp className="h-6 w-6" />
          <span className="text-xs font-bold">up</span>
        </div>
      </Button>

      <div className={`absolute bottom-4 right-4 text-3xl md:text-4xl font-bold ${darkTheme ? 'text-gray-300' : 'text-white'} drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] pointer-events-none`}>
        05
      </div>
    </footer>
  );
};