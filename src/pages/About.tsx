import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import mainpage from "@/assets/mainpage.jpeg";

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Header />
      <ScrollProgress />

      <main className="relative z-10">
        {/* Small Title at Top Left */}
        <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-32">
          <h1 className="text-lg md:text-xl font-bold text-white mb-4 text-left">
            ABOUT US
          </h1>
        </div>

        {/* Banner Image - Full Width, 45% Height */}
        <section className="w-full h-[45vh] mb-12 md:mb-16">
          <img
            src={mainpage}
            alt="About us hero"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Introduction Section - Two Column - Full Width */}
        <section className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-32">
          <div className="pl-6 md:pl-12 lg:pl-16">
            <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
              ScaleX was created with a clear purpose:
              <br />
              to make every journey comfortable,
              <br />
              seamless, and memorable.
            </p>
          </div>
          <div className="pr-6 md:pr-12 lg:pr-16">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed text-right">
              With many years of experience
              <br />
              in the digital industry, our team
              <br />
              is driven by a passion for innovation
              <br />
              and a deep love for creating impactful brands.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          {/* Services Section - Three Column Layout */}
          <section className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column - What we do */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4 underline">
                What we do?
              </h2>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                We provide premium digital solutions
                <br />
                with a personal touch.
              </p>
            </div>

            {/* Middle Column - Our Services */}
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4 underline">
                Our Services
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Our expertise includes brand strategy, web development, and content creation - perfect for startups and established companies. For larger projects, our comprehensive services deliver the same level of quality and attention to detail.
              </p>
            </div>

            {/* Right Column - Large Image */}
            <div>
              <img
                src={mainpage}
                alt="Our work"
                className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover rounded-lg"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer darkTheme />
    </div>
  );
};

export default About;