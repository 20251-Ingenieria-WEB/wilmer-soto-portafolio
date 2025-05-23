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
  description: string;
  githubLink: string;
}

export default function LearnMorePortfolio({
  description,
  githubLink,
}: LearnMorePortfolioProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          Conoce mas.
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Informacion extra</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{description}</DropdownMenuItem>
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
