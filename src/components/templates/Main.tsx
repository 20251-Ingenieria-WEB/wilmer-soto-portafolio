import HeroSection from "@/components/organisms/HeroSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";

export default function Main() {
  return (
    <div className="flex flex-1 flex-col gap-y-10 overflow-y-auto pr-12 pb-10 pl-7">
      <HeroSection />
      <KnowledgeSection />
      <EducationSection />
      <PortfolioSection />
    </div>
  );
}
