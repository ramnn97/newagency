import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  "VIDEO PRODUCTION & MOTION GRAPHICS",
  "MEME MARKETING",
  "CONTENT MARKETING",
  "AD PRODUCTION",
  "WEB DEVELOPMENT",
];

export const Expertise = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const serviceContent = [
    {
      title: "What Is Video Production & Motion Graphics?",
      description:
        "We create compelling visual stories through brand videos, explainers, animations, reels, and advertisements. Our production covers concept, scripting, filming, editing, and delivery to captivate your audience.",
      reasons: [
        "End-to-end production: concept to final delivery.",
        "Explainers, ads, reels, and motion graphics that stay on-brand.",
        "Story-first approach that keeps viewers engaged.",
      ],
    },
    {
      title: "What Is Meme Marketing?",
      description: "Meme marketing leverages internet culture to create viral content that resonates with audiences. At ScaleX Studios, we understand how to harness the power of memes to build authentic connections with your target demographic.",
      reasons: [
        "We Create Viral-Worthy Content That Captivates Younger Audiences.",
        "Our Team Understands Internet Culture And Trending Topics.",
        "We Deliver Authentic Brand Messaging Through Humorous Engagement."
      ]
    },
    {
      title: "What Is Content Marketing?",
      description: "Content Marketing is still king in this digital age since it forms the foundation of many successful marketing strategies. Discussing our understanding of the important role of content management in the growth of corporate ventures and brand success at ScaleX Studios.",
      reasons: [
        "We Make Approachable And Appealing Content That Targets New Audiences.",
        "Delegating A Specific Team That Handles Content And Builds Outstanding Reach.",
        "Providing Innovative Ideas That Can Kickstart New Trends In The Industry."
      ]
    },
    {
      title: "What Is Ad Production?",
      description: "Professional ad production combines creative vision with technical expertise to deliver compelling advertisements. Our team crafts visually stunning ads that drive engagement and conversions across multiple platforms.",
      reasons: [
        "We Produce High-Quality Visual Content With Cutting-Edge Technology.",
        "Our Creative Team Develops Ads That Tell Your Brand Story Effectively.",
        "We Optimize Ad Performance Across All Digital And Traditional Media Channels."
      ]
    },
    {
      title: "What Is Web Development?",
      description: "We are specialists in creating aesthetic websites with interactive new styles. Our team combines cutting-edge technology with creative design to build engaging digital experiences that captivate users and drive business growth.",
      reasons: [
        "We Design Visually Stunning Websites With Modern Aesthetics.",
        "Our Development Approach Focuses On Interactive User Experiences.",
        "We Implement Innovative Design Trends To Keep Your Brand Fresh."
      ]
    }
  ];

  return (
    <section id="services" className="relative min-h-screen bg-brand-dark text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black">Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Finding the top digital innovations for forward-thinking brands hoping to push the
            envelope and make a big impact is something we are enthusiastic about.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-0 border-2 border-white rounded-[3rem] overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border-b-2 border-white last:border-b-0 hover:bg-white/5 transition-colors duration-300"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className="flex items-center justify-between p-8 md:p-12 cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent"
                  style={{
                    WebkitTextStroke: "2px white",
                    transition: "all 0.3s ease",
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style as any).WebkitTextStroke = "0px";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style as any).WebkitTextStroke = "2px white";
                    e.currentTarget.style.color = "transparent";
                  }}
                >
                  {service}
                </h3>
                <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
              
              {/* Expandable content */}
              {expandedIndex === index && (
                <div className="px-8 md:px-12 pb-8 md:pb-12 transition-all duration-300 ease-in-out">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-2xl font-bold text-yellow-400">{serviceContent[index].title}</h4>
                        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                          {serviceContent[index].description}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold text-yellow-400">Why ScaleX Studios?</h5>
                        <ul className="space-y-2 mt-4">
                          {serviceContent[index].reasons.map((reason, reasonIndex) => (
                            <li key={reasonIndex} className="flex items-start">
                              <span className="text-yellow-400 mr-2">•</span>
                              <span className="text-muted-foreground">{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Why Choose Us inline section */}
        <div className="mt-20 grid lg:grid-cols-[1.05fr_1fr] gap-8 items-stretch overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
          {/* Left gradient panel */}
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-[#0a0620] min-h-[520px]">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.4),transparent_45%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent_50%)]" />

            <div className="absolute inset-y-10 left-6 flex flex-col justify-between text-white/25 pointer-events-none">
              <span className="text-8xl md:text-9xl font-black leading-none">02</span>
            </div>

            <div className="absolute inset-y-0 left-0 flex items-center">
              <span className="-rotate-90 text-5xl md:text-6xl font-black tracking-[0.18em] text-white/40">
                CHOOSE
              </span>
            </div>
          </div>

          {/* Right content card */}
          <div className="bg-white text-slate-900 p-10 md:p-12 lg:p-14 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wide text-slate-600 uppercase">
              <span className="h-2 w-2 rounded-full bg-purple-600" />
              <span>ScaleX Studios</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black">Why Choose Us?</h3>

            <p className="italic text-slate-700">Your Growth is Our Priority!</p>

            <ul className="space-y-3 text-base md:text-lg text-slate-800">
              <li>
                <strong>Creative Innovation:</strong> Fresh, unique, high-impact designs that resonate with your audience.
              </li>
              <li>
                <strong>Strategic Thinking:</strong> Campaigns backed by research, trends, and insights for maximum engagement.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> Strategies customized to your business goals for optimal results.
              </li>
              <li>
                <strong>End-to-End Expertise:</strong> Concept to execution across branding and marketing needs.
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

      <div className="absolute bottom-6 right-6 text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]">
        04
      </div>
    </section>
  );
};