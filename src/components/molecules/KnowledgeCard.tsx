import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface KnowledgeCardsProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export default function KnowledgeCard({
  title,
  description,
  Icon,
}: KnowledgeCardsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center p-0">
        <Icon className="mb-4 h-16 w-16 text-yellow-500" />
        <CardTitle className="px-5 text-center text-lg font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="px-5 text-center text-neutral-700">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
