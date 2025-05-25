import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface WhyHireMeCardProps {
  title: string;
  description: string[];
  Icon: React.ElementType;
}

// Card generica (usando Shadcn) para las parte del porque me deberian contratar. Se usan en el carrousel de esta seccion.
export default function WhyHireMeCard({
  title,
  description,
  Icon,
}: WhyHireMeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center p-0">
        <Icon className="mb-4 h-16 w-16 text-yellow-500" />
        <CardTitle className="text-center text-lg font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="px-5">
          <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
            {description.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
