import Image from "next/image";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";

export default function SidebarPhoto() {
  return (
    <div className="flex-col flex items-center gap-y-4 my-4">
      <Image
        src="/profile.jpg"
        alt="Foto de perfil redonda"
        width={200}
        height={200}
        className="rounded-full w-40 h-45 object-cover"
      />
      <p className="font-semibold">Wilmer Soto Vidal</p>
      <p className="font-extralight text-neutral-500">Ingeniero de sistemas</p>
    </div>
  );
}
