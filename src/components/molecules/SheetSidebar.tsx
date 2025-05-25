import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import SidebarContent from "@/components/organisms/SidebarContent";

export default function SheetSidebar() {
  return (
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
  );
}
