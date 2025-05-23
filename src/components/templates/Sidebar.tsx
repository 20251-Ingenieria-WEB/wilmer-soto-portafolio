import SidebarPhoto from "@/components/organisms/SidebarPhoto";
import SidebarInfo from "@/components/organisms/SidebarInfo";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import SidebarLanguages from "@/components/organisms/SidebarLanguages";
import SidebarProgramming from "@/components/organisms/SidebarProgramming";
import SidebarExtraSkills from "@/components/organisms/SidebarExtraSkills";

export default function Sidebar() {
  return (
    <aside className="flex w-80 flex-col gap-y-4 overflow-y-auto bg-white px-5 py-5">
      <SidebarPhoto />
      <HorizontalDivider />
      <SidebarInfo />
      <HorizontalDivider />
      <SidebarLanguages />
      <HorizontalDivider />
      <SidebarProgramming />
      <HorizontalDivider />
      <SidebarExtraSkills />
      <HorizontalDivider />
    </aside>
  );
}
