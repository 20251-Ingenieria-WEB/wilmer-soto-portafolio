import Header1 from "@/components/atoms/Header1";
import { Progress } from "@/components/ui/progress";
import LabelValue from "@/components/molecules/LabelValue";

export default function SidebarLanguages() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1>Lenguajes</Header1>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="Español"
        second="100%"
      ></LabelValue>
      <Progress value={100}></Progress>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="Ingles"
        second="90%"
      ></LabelValue>
      <Progress value={90}></Progress>
    </div>
  );
}
