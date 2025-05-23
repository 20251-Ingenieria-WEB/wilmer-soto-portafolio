import TextIntroduction from "@/components/organisms/TextIntroduction";
import PersonalPhoto from "../atoms/PersonalPhoto";

export default function HeroSection() {
  return (
    <div className="flex h-90 shrink-0 items-center overflow-auto bg-white px-10">
      <TextIntroduction />
      <PersonalPhoto className="h-70 w-70" />
    </div>
  );
}
