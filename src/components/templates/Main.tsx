import HeroSection from "@/components/organisms/HeroSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import WhyHireMeSection from "@/components/organisms/WhyHireMeSection";

// Main sostiene todos las secciones principales del portafolio
export default function Main() {
  return (
    <div className="flex flex-1 flex-col gap-y-10 overflow-y-auto pr-13 pb-10 pl-11 sm:pr-12 sm:pl-7">
      <HeroSection />
      <KnowledgeSection />
      <EducationSection />
      <PortfolioSection />
      <WhyHireMeSection />
    </div>
  );
}
