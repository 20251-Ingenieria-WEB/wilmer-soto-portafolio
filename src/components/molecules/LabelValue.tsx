import { cn } from "@/lib/utils";

interface LabelValueProps {
  first: string;
  second: string;
  className?: string;
}

export default function LabelValue({
  first,
  second,
  className,
}: LabelValueProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <p>{first} </p>
      <p>{second}</p>
    </div>
  );
}
