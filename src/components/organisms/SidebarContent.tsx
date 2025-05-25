import SidebarPhoto from "@/components/organisms/SidebarPhoto";
import SidebarInfo from "@/components/organisms/SidebarInfo";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import SidebarLanguages from "@/components/organisms/SidebarLanguages";
import SidebarProgramming from "@/components/organisms/SidebarProgramming";
import SidebarExtraSkills from "@/components/organisms/SidebarExtraSkills";

// Contenido completo del sidebar. Se define aqui para reutilizalo tanto en el sheet (menu desplegable)
// como en el sidebar estatico normal.
export default function SidebarContent() {
  return (
    <>
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
    </>
  );
}
