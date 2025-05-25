import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface LearnMorePortfolioProps {
  longDescription: string;
  githubLink: string;
}

// DropdownMenu generico para la parte de "Conoce mas." de cada item de mis proyectos. Recibe el link de github
// y la descripcion mas detallada.
export default function LearnMorePortfolio({
  longDescription,
  githubLink,
}: LearnMorePortfolioProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          Conoce mas.
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-w-sm">
        <DropdownMenuLabel>Informacion extra</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Se usa .split ya que el texto de descripcion se separa con \n. Se divide cada parrafo en un item del menu */}
        {longDescription.split("\n").map((paragraph, index) => (
          <DropdownMenuItem key={index}>{paragraph}</DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline decoration-sky-500"
          >
            Link de github
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
