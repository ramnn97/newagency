import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { CaseStudies } from "@/components/CaseStudies";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import NeuralBg from "@/components/NeuralBg";
import NFTCard from "@/components/NFTCard";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <ScrollProgress />
      
      {/* Neural background - Home page only */}
      <div className="fixed inset-0 z-[-2]">
        <NeuralBg hue={200} saturation={0.8} chroma={0.6} />
      </div>
      
      <main className="relative z-10">
        <Hero />
        <NFTCard />
        <CaseStudies />
        <Expertise />
      </main>

      <Footer />
    </div>
  );
};

export default Index;