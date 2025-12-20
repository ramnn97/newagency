import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import sxsLogo from "@/assets/sxs-logo.jpeg";

const navItems = [
];

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsScrolledDown(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrolledDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMenuClick = (href: string) => {
    setMenuOpen(false);
    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-6 rounded-full bg-white/20 border border-white/25 backdrop-blur-xl px-5 md:px-8 py-3 shadow-lg w-full max-w-4xl">
                <NavLink to="" className="flex items-center gap-3">
                  <img src={sxsLogo} alt="ScaleX Studios" className="h-8 w-8 rounded-full border border-white/60" />
                  <span className="text-lg font-semibold text-blue-800">ScaleX Studios</span>
                </NavLink>

              <nav className="hidden md:flex items-center gap-6 text-white">
                {navItems.map((item) => (
                  <NavLink key={item.label} to={item.href} className="text-base font-semibold hover:text-white/80">
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="ml-auto flex items-center justify-center h-8 w-8 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <span className="h-5 w-[18px] flex flex-col justify-between">
                  <span className="block h-[2px] rounded-full bg-white/80" />
                  <span className="block h-[2px] rounded-full bg-white/80" />
                  <span className="block h-[2px] rounded-full bg-white/80" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen menu modal with pop-up links */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg transition-transform duration-700 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <img src={sxsLogo} alt="ScaleX Studios" className="h-10 w-10" />
              <span className="text-xl font-bold text-black">ScaleX Studios</span>
            </NavLink>

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => handleMenuClick(item.href)}
              className="text-5xl md:text-6xl font-bold text-black transition-all duration-300 hover:text-primary"
              style={{
                animation: menuOpen ? `fade-in-up 0.6s ease-out ${index * 0.1}s both` : "none",
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="text-muted-foreground mb-2">Want to get in touch?</p>
          <a href="mailto:hello@scalexstudios.com" className="text-primary font-semibold hover:underline">
            hello@scalexstudios.com
          </a>
        </div>
      </div>
    </>
  );
};