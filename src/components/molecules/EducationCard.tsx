import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";

interface EducationCardProps {
  institution: string;
  dateRange: string;
  degree: string;
  description: string;
}

// Card generica para la parte de educacion. Usa los atomos de Header1 y Text para definir las secciones de
// institucion, fecha, titulo y descripcion de este.
export default function EducationCard({
  institution,
  dateRange,
  degree,
  description,
}: EducationCardProps) {
  return (
    <div className="grid grid-cols-2 gap-x-8 break-words">
      <div className="flex flex-col gap-y-2 text-left">
        <Header1 className="text-sm">{institution}</Header1>
        <Text>{dateRange}</Text>
      </div>

      <div className="flex flex-col gap-y-2 text-left">
        <Header1>{degree}</Header1>
        <Text>{description}</Text>
      </div>
    </div>
  );
}
