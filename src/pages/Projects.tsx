import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Plus, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import mock2 from "@/assets/mock2.png";
import mock3 from "@/assets/mock3.png";
import mock1 from "@/assets/mock1.png";
import mock4 from "@/assets/mock4.png";
import AuroraBackground from "@/components/AuroraBackground";
import mock5 from "@/assets/mock5.png";
import mock6 from "@/assets/mock6.png";
import mock7 from "@/assets/mock7.png";
import mock8 from "@/assets/mock8.png";
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  url: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "hashmint",
    title: "Hashmint",
    subtitle: "India",
    description: "3D Website & Photography",
    category: "3D Website & Photography",
    url: "https://obys-agency-flame.vercel.app/",
    image: mock2,
  },
  {
    id: "summr",
    title: "Summr",
    subtitle: "India",
    description: "Brand Identity & Web Design",
    category: "Brand Identity & Web",
    url: "https://new-health-lyart.vercel.app/",
    image: mock3,
  },
  {
    id: "jinx",
    title: "Jinx",
    subtitle: "India",
    description: "Brand Identity & Web Design",
    category: "Brand Identity & Web Design",
    url: "https://tala-gamma.vercel.app/",
    image: mock4,
  },
  {
    id: "medium-turtles",
    title: "Medium Turtles",
    subtitle: "",
    description: "Brand Identity, Web & App",
    category: "Brand Identity, Web & App",
    url: "https://mindmarket.com/",
    image: mock1,
  },
  {
    id: "Hopsital Website",
    title: "Hospital Website",
    subtitle: "India",
    description: "Website",
    category: "Website",
    url: "https://white-lotus-portal.vercel.app/",
    image: mock5,
  },
  {
    id: "E-commerce Website",
    title: "E-commerce Website",
    subtitle: "India",
    description: "Website",
    category: "Website",
    url: "https://ecommercewebsite.com",
    image: mock6,
  },
  {
    id: "Chatapp",
    title: "Chatapp",
    subtitle: "India",
    description: "Chatapp",
    category: "Chatapp",
    url: "https://chatapp.com",
    image: mock7,
  },
];

const Projects = () => {
  // Group projects in sets of 3: 1 large + 2 small
  const projectGroups: Array<{ large: Project; small: Project[] }> = [];
  
  for (let i = 0; i < projects.length; i += 3) {
    const large = projects[i];
    const small = projects.slice(i + 1, i + 3);
    if (large) {
      projectGroups.push({ large, small });
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Aurora Background */}
      <AuroraBackground 
        className="fixed inset-0 z-0"
        radialGradient={true}
      />

      {/* Hero Section - Transparent Background */}
      <section
        className="min-h-screen flex items-center relative overflow-hidden px-10 md:px-16 pt-16"
      >
        <div className="max-w-6xl w-full relative z-10 text-white space-y-8 py-12 md:py-20">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-black leading-tight drop-shadow-lg">
              Create real-time dashboards
              <br className="hidden md:block" />
              without writing code
            </h1>
            <p className="text-base md:text-lg text-white max-w-2xl">
              We have worked with a variety of clients to create a variety of projects.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@scalexstudios.com?subject=Dashboard Inquiry&body=Hello ScaleX Team,%0D%0A%0D%0AI'm interested in building my first dashboard.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you!"
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
            >
              Build your first dashboard
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                const projectsSection = document.getElementById("projects-grid");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 hover:border-white transition-colors flex items-center justify-center text-white shadow-lg"
              aria-label="Scroll to projects"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid Section - Transparent Background */}
      <section 
        id="projects-grid"
        className="px-10 md:px-16 py-24 relative overflow-hidden"
      >
        <div className="w-full relative z-10">
          {/* Header with Works title and Add button */}

          {/* Projects Layout: 1 Large, 2 Small, 1 Large, 2 Small... */}
          {projectGroups.map((group, groupIndex) => (
            <div key={groupIndex} className={groupIndex > 0 ? "mt-12" : ""}>
              {/* Large Project Card */}
              <div className="mb-6">
                <a
                  href={group.large.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative rounded-3xl overflow-hidden bg-black bg-opacity-70 border border-gray-800 hover:border-white transition-all duration-300 hover:scale-[1.02]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${group.large.image})` }}
                    />
                    <div className="relative p-12 md:p-16 min-h-[500px] md:min-h-[600px] flex flex-col justify-between">
                      <div></div>
                      <div className="flex items-center gap-2 text-gray-200 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">View Project</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Two Small Project Cards */}
              {group.small.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.small.map((project) => (
                    <a
                      key={project.id}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative rounded-3xl overflow-hidden bg-black bg-opacity-70 border border-gray-800 hover:border-white transition-all duration-300 hover:scale-[1.02] min-h-[400px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="relative p-8 md:p-12 h-full flex flex-col justify-between">
                          <div></div>
                          <div className="flex items-center gap-2 text-gray-200 group-hover:text-white transition-colors mt-4">
                            <span className="text-sm font-medium">View Project</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer darkTheme />
    </div>
  );
};

export default Projects;