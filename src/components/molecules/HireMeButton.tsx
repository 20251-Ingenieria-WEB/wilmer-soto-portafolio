import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HireMeButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          Contratame! →
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Informacion</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href="https://www.linkedin.com/in/wilmer-soto-04346a367/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
          >
            LinkedIn <FaLinkedin />
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="mailto:wsoto04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
          >
            Enviar Email <Mail />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
