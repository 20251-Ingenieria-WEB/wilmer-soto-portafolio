import TextIntroduction from "@/components/organisms/TextIntroduction";
import PersonalPhoto from "../atoms/PersonalPhoto";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center bg-white p-6 sm:flex-row">
      <TextIntroduction />
      <PersonalPhoto className="h-70 w-70" />
    </div>
  );
}
