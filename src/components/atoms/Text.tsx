import { cn } from "@/lib/utils";

export default function Text({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-base font-extralight text-neutral-600", className)}>
      {children}
    </p>
  );
}
