import Header1 from "@/components/atoms/Header1";
import { Progress } from "@/components/ui/progress";
import LabelValue from "@/components/molecules/LabelValue";
import React from "react";

const LanguagesData = [
  { first: "Español", second: "100%", percentage: 100 },
  { first: "Ingles", second: "90%", percentage: 90 },
];

export default function SidebarLanguages() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1>Lenguajes</Header1>
      {LanguagesData.map((entry, index) => (
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
