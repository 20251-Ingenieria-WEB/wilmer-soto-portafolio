import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LearnMorePortfolio from "@/components/molecules/LearnMorePortfolio";

interface PortfolioCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  longDescription: string;
  githubLink: string;
}

// Card generico (usando Shadcn) para los proyectos personales. Estas cartas son las que se usan en el Carousel.
export default function PortfolioCard({
  image,
  imageAlt,
  title,
  description,
  longDescription,
  githubLink,
}: PortfolioCardProps) {
  return (
    <Card className="max-h-screen">
      <CardHeader className="flex flex-col items-center justify-center">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={183}
          className="rounded-lg"
        ></Image>
        <CardTitle className="text-center text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center text-center">
        {description}
      </CardContent>
      <CardFooter className="flex justify-center">
        <LearnMorePortfolio
          longDescription={longDescription}
          githubLink={githubLink}
        ></LearnMorePortfolio>
      </CardFooter>
    </Card>
  );
}
