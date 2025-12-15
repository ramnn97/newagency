import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Vertical progress bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 h-64 w-0.5 bg-muted rounded-full z-40 hidden lg:block">
        <div
          className="bg-primary rounded-full transition-all duration-300"
          style={{ height: `${progress}%`, width: "100%" }}
        />
      </div>

      {/* Circular progress indicator */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <div className="relative w-16 h-16">
          <svg className="transform -rotate-90 w-16 h-16">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="hsl(var(--muted))"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </>
  );
};
