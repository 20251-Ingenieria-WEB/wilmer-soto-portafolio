import SidebarPhoto from "@/components/molecules/SidebarPhoto";
import SidebarInfo from "@/components/molecules/SidebarInfo";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";

export default function Sidebar() {
  return (
    <aside className="flex flex-col fixed top-0 left-0 h-screen w-64 overflow-y-auto overflow-x-auto bg-white">
      <SidebarPhoto></SidebarPhoto>
      <HorizontalDivider />
      <SidebarInfo></SidebarInfo>
      <HorizontalDivider />
    </aside>
  );
}
