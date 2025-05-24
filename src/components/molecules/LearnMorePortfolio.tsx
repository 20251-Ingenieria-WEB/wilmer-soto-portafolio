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
