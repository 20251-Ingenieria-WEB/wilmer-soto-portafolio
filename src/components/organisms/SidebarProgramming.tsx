import Header1 from "@/components/atoms/Header1";
import { Progress } from "@/components/ui/progress";
import LabelValue from "@/components/molecules/LabelValue";
import React from "react";

const ProgrammingLanguagesData = [
  {
    first: "Python",
    second: "90%",
    percentage: 90,
  },
  {
    first: "HTML",
    second: "85%",
    percentage: 85,
  },
  {
    first: "CSS",
    second: "85%",
    percentage: 85,
  },
  {
    first: "Javascript/Typescript",
    second: "85%",
    percentage: 85,
  },
  {
    first: "Java",
    second: "90%",
    percentage: 90,
  },
];

export default function SidebarProgramming() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1>Lenguajes de programacion</Header1>
      {ProgrammingLanguagesData.map((entry, index) => (
        <React.Fragment key={index}>
          <LabelValue
            className="font-extralight text-neutral-700"
            first={entry.first}
            second={entry.second}
          ></LabelValue>
          <Progress value={entry.percentage}></Progress>
        </React.Fragment>
      ))}
    </div>
  );
}
