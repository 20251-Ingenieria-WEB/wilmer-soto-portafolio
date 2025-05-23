import HeroSection from "@/components/organisms/HeroSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";

export default function Main() {
  return (
    <div className="flex h-screen flex-1 flex-col gap-y-10 overflow-y-auto pr-12 pl-7">
      <HeroSection />
      <KnowledgeSection />
    </div>
  );
}
