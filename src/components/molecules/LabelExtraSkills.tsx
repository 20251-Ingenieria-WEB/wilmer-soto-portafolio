import { Layers } from "lucide-react";

export default function LabelExtraSkills({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-x-2">
      <Layers></Layers>
      <p className="font-extralight text-neutral-700">{children}</p>
    </div>
  );
}
