import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import SidebarContent from "@/components/organisms/SidebarContent";

export default function Sidebar() {
  return (
    <>
      <aside className="hidden flex-col gap-y-4 overflow-y-auto bg-white px-5 py-5 lg:flex">
        <SidebarContent />
      </aside>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto px-5">
            <SheetTitle className="flex items-center justify-center text-center">
              Informacion
            </SheetTitle>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
