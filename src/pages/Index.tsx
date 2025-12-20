import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import AnimatedPages from "@/components/AnimatedPages";
import NFTCard from "@/components/NFTCard";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <ScrollProgress />
      
      <main className="relative z-10">
        <Hero />
        <NFTCard />
        <CaseStudies />
        <Expertise />
        <AnimatedPages />
      </main>

      <Footer darkTheme />
    </div>
  );
};

export default Index;