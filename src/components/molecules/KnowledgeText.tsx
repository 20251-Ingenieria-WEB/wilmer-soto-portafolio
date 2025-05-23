import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";

export default function KnowledgeText() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Header1 className="text-3xl">Mis conocimientos</Header1>
      <Text>Estos son los concimientos de programacion que tengo</Text>
    </div>
  );
}
