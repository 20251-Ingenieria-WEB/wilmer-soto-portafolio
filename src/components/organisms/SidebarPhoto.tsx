import Header1 from "@/components/atoms/Header1";
import PersonalPhoto from "@/components/atoms/PersonalPhoto";

export default function SidebarPhoto() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <PersonalPhoto className="rounded-full object-cover" />
      <Header1>Wilmer Soto Vidal</Header1>
      <Header1 className="text-base font-extralight text-neutral-700">
        Ingeniero de sistemas
      </Header1>
    </div>
  );
}
