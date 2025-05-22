import Header1 from "@/components/atoms/Header1";
import { Progress } from "@/components/ui/progress";
import LabelValue from "@/components/molecules/LabelValue";

export default function SidebarProgramming() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1>Lenguajes de programacion</Header1>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="Python"
        second="90%"
      ></LabelValue>
      <Progress value={90}></Progress>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="HTML"
        second="85%"
      ></LabelValue>
      <Progress value={85}></Progress>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="CSS"
        second="85%"
      ></LabelValue>
      <Progress value={85}></Progress>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="Javascript/Typescript"
        second="85%"
      ></LabelValue>
      <Progress value={85}></Progress>
      <LabelValue
        className="font-extralight text-neutral-700"
        first="Java"
        second="90%"
      ></LabelValue>
      <Progress value={90}></Progress>
    </div>
  );
}
