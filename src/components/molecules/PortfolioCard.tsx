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

export default function PortfolioCard({
  image,
  imageAlt,
  title,
  description,
  longDescription,
  githubLink,
}: PortfolioCardProps) {
  return (
    <Card className="min-w-80">
      <CardHeader>
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-lg"
        ></Image>
        <CardTitle className="text-center text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter>
        <LearnMorePortfolio
          description={longDescription}
          githubLink={githubLink}
        ></LearnMorePortfolio>
      </CardFooter>
    </Card>
  );
}
