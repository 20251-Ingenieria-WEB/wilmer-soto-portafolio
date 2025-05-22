import SidebarPhoto from "@/components/molecules/SidebarPhoto";
import SidebarInfo from "@/components/molecules/SidebarInfo";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import SidebarLanguages from "@/components/molecules/SidebarLanguages";
import SidebarProgramming from "@/components/molecules/SidebarProgramming";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 flex h-screen w-80 flex-col gap-y-4 overflow-y-auto bg-white px-5 py-5">
      <SidebarPhoto />
      <HorizontalDivider />
      <SidebarInfo />
      <HorizontalDivider />
      <SidebarLanguages />
      <HorizontalDivider />
      <SidebarProgramming />
      <HorizontalDivider />
      <HorizontalDivider />
    </aside>
  );
}
