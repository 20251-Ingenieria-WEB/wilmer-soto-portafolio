import Image from "next/image";
import Header1 from "@/components/atoms/Header1";

export default function SidebarPhoto() {
  return (
    <div className="flex-col flex items-center gap-y-4">
      <Image
        src="/profile.jpg"
        alt="Foto de perfil redonda"
        width={200}
        height={200}
        className="rounded-full w-40 h-45 object-cover"
      />
      <Header1>Wilmer Soto Vidal</Header1>
      <Header1 className="font-extralight text-neutral-700 text-base">
        Ingeniero de sistemas
      </Header1>
    </div>
  );
}
