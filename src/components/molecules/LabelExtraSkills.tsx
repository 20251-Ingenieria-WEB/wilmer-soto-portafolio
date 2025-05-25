import { Layers } from "lucide-react";
import Text from "@/components/atoms/Text";

// Label que se usa para la parte de habilidades extra en el sidebar. Usa el icono de Layers y el atomo Text
export default function LabelExtraSkills({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Layers className="text-yellow-500"></Layers>
      <Text>{children}</Text>
    </div>
  );
}
