import { cn } from "@/lib/utils";
import Image from "next/image";

export default function PersonalPhoto({ className }: { className?: string }) {
  return (
    <Image
      src="/profile.png"
      alt="Foto de perfil"
      width={400}
      height={400}
      className={cn("h-45 w-40", className)}
    />
  );
}
