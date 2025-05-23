import { Layers } from "lucide-react";

export default function LabelExtraSkills({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Layers className="text-yellow-500"></Layers>
      <p className="font-extralight text-neutral-700">{children}</p>
    </div>
  );
}
