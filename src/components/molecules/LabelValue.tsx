import { cn } from "@/lib/utils";

interface LabelValueProps {
  first: string;
  second: string;
  className?: string;
}

// LabelValue se utiliza para las partes de la sidebar que tiene dos textos. Uno a la izquierda y otro a la derecha.
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
