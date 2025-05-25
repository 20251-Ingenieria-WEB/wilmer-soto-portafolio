import { cn } from "@/lib/utils";

export default function Header1({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-sm font-semibold sm:text-lg", className)}>
      {children}
    </h1>
  );
}
