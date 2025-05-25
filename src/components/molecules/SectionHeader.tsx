import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 text-center">
      <Header1 className="sm:text-3xl">{title}</Header1>
      <Text className="sm:text-lg">{description}</Text>
    </div>
  );
}
