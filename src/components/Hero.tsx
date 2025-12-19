import { Button } from "@/components/ui/button";
import SparklesText from "@/components/SparklesText";
import mainpage from "@/assets/mainpage.jpeg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-start pt-32 md:pt-40 lg:pt-40 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={mainpage}
          alt="Hero background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full py-8 md:py-12 lg:py-16 gap-12 lg:gap-16">
          {/* Left side - Title & caption */}
          <div className="max-w-3xl pl-0 md:pl-2 lg:pl-4 xl:pl-8 pt-8 md:pt-12 lg:pt-0 mx-auto lg:mx-0 text-center lg:text-left text-black space-y-6">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[0.9] text-primary uppercase"
              style={{
                fontFamily:
                  '"Aladin", "Protest Guerrilla", "Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                fontWeight: 400,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Design a System <br></br>That Scales
            </h1>
            {/* Mobile/tablet supporting copy */}
            <p className="mt-80 md:mt-90 pb-30 text-sm md:text-base max-w-md mx-auto lg:hidden text-white leading-relaxed">
              We help brands turn bold ideas
              <br />
              into scalable digital systems
              <br />
              that feel smooth, fast,
              <br />
              and built to grow with them.
            </p>
            <p className="hidden lg:block mt-6 md:mt-8 text-base md:text-lg lg:text-xl max-w-xl text-gray-800 leading-relaxed">
              We partner with ambitious brands to transform strategy 
              <br />
              into scalable digital systems that convert intent into
              <br />
              measurable, sustainable growth.
              <br />
             
            </p>
          </div>

          {/* Right side - Our Belief */}
          <div className="hidden lg:block max-w-md lg:max-w-lg pr-2 md:pr-6 lg:pr-8 xl:pr-16 pt-16 md:pt-24 lg:pt-32 text-left space-y-6">
            <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide uppercase">
              OUR BELIEF
            </p>
            <div className="space-y-4">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
                style={{
                  fontFamily:
                    '"Aladin", "Protest Guerrilla", "Roboto", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  letterSpacing: "-0.01em",
                }}
              >
                Good design
                <br />
                disappears.
                <br />
                Performance doesn&apos;t.
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We focus on systems that quietly do their job
                and compound results over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};