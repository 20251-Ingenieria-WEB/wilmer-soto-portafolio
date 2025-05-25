import { cn } from "@/lib/utils";

export default function Text({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-sm font-extralight text-neutral-600 sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}
