import SidebarContent from "@/components/organisms/SidebarContent";
import SheetSidebar from "@/components/molecules/SheetSidebar";

// Sidebar. Se usa dos versiones, una normal estatica para pantallas grandes y una con "Sheet" (menu desplegable) para pantallas medianas y pequeñas.
export default function Sidebar() {
  return (
    <>
      <aside className="hidden flex-col gap-y-4 overflow-y-auto bg-white px-5 py-5 lg:flex">
        <SidebarContent />
      </aside>
      <div className="lg:hidden">
        <SheetSidebar />
      </div>
    </>
  );
}
