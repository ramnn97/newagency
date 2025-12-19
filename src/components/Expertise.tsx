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
    <section id="services" className="relative min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black">Expertise</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Finding the top digital innovations for forward-thinking brands hoping to push the
            envelope and make a big impact is something we are enthusiastic about.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-0 border-2 border-white rounded-[3rem] overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border-b-2 border-white last:border-b-0 hover:bg-white/5 transition-colors duration-300 text-white"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className="flex items-center justify-between p-8 md:p-12 cursor-pointer"
                onClick={() => toggleService(index)}
              >
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-transparent"
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
                        <h4 className="text-xl md:text-2xl font-bold text-white">{serviceContent[index].title}</h4>
                        <p className="text-base text-white leading-relaxed mt-4">
                          {serviceContent[index].description}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-white">Why ScaleX Studios?</h5>
                        <ul className="space-y-2 mt-3 text-sm md:text-base">
                          {serviceContent[index].reasons.map((reason, reasonIndex) => (
                            <li key={reasonIndex} className="flex items-start">
                              <span className="text-white mr-2">•</span>
                              <span className="text-white">{reason}</span>
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

        {/* About Us title */}
        <div className="mt-16 mb-8 text-center">
          <h3 className="text-5xl md:text-5xl font-black tracking-tight text-white">
            
          </h3>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]">
        04
      </div>
    </section>
  );
};