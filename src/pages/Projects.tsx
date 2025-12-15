import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Plus, ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import mock2 from "@/assets/mock2.png";
import mock3 from "@/assets/mock3.png";
import mock1 from "@/assets/mock1.png";
import mock4 from "@/assets/mock4.png";
import AuroraBackground from "@/components/AuroraBackground";

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
    id: "bcf",
    title: "",
    subtitle: "",
    description: "",
    category: "",
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
    id: "panchayat",
    title: "Panchayat",
    subtitle: "Amazon Prime",
    description: "Digital Campaign",
    category: "Digital Campaign",
    url: "https://amazonprime.com/panchayat",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
  },
  {
    id: "enclave",
    title: "Enclave",
    subtitle: "Block Chain",
    description: "Blockchain Platform",
    category: "Blockchain Platform",
    url: "https://enclave.io",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
  },
  {
    id: "clothing",
    title: "2.0",
    subtitle: "Clothing",
    description: "E-Commerce WebApp",
    category: "E-Commerce WebApp",
    url: "https://2point0clothing.com",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    id: "staap",
    title: "Staap",
    subtitle: "Stories of Art",
    description: "Website",
    category: "Website",
    url: "https://staap.com",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    id: "zaap",
    title: "Zaap",
    subtitle: "Energy",
    description: "Energy Brand",
    category: "Energy Brand",
    url: "https://zaapenergy.com",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
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
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-700 hover:border-white transition-colors text-sm font-medium shadow-lg">
            Watch Demo
            <span className="w-6 h-6 rounded-full bg-white text-black text-[10px] flex items-center justify-center">▶</span>
          </button>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-tight drop-shadow-lg">
              Create real-time dashboards
              <br className="hidden md:block" />
              without writing code
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl">
              We help teams turn live data into beautiful, customizable dashboards—no devs required. Share insights, not spreadsheets.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg"
            >
              Build your first dashboard
              <ExternalLink className="w-4 h-4" />
            </Button>

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
                      <div>
                        <div className="flex flex-col gap-1 mb-6">
                          <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            {group.large.title}
                          </h3>
                          {group.large.subtitle && (
                            <span className="text-3xl md:text-5xl font-black text-white leading-tight">
                              {group.large.subtitle}
                            </span>
                          )}
                        </div>
                        <p className="text-xl md:text-2xl text-white font-medium">
                          {group.large.description}
                        </p>
                      </div>
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
                          <div>
                            <div className="flex flex-col gap-1 mb-6">
                              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                {project.title}
                              </h3>
                              {project.subtitle && (
                                <span className="text-2xl md:text-3xl font-black text-white leading-tight">
                                  {project.subtitle}
                                </span>
                              )}
                            </div>
                            <p className="text-lg md:text-xl text-white font-medium">
                              {project.description}
                            </p>
                          </div>
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

      <Footer darkTheme={true} />
    </div>
  );
};

export default Projects;

