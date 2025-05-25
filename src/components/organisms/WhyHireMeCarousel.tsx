import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Lightbulb,
  TrendingUp,
  Network,
  Users,
  CheckCircle,
  Rocket,
} from "lucide-react";
import WhyHireMeCard from "@/components/molecules/WhyHireMeCard";

const WhyHireMeCardsData = [
  {
    title: "Pensamiento Crítico y Resolución de Problemas",
    icon: Lightbulb,
    description: [
      "Abordo cada desafío con una mentalidad analítica y proactiva.",
      "Busco soluciones innovadoras y eficientes.",
      "Optimizo procesos y supero obstáculos técnicos de forma efectiva.",
    ],
  },
  {
    title: "Adaptabilidad y Aprendizaje Constante",
    icon: TrendingUp,
    description: [
      "Me mantengo actualizado con las últimas tendencias tecnológicas y frameworks.",
      "Me adapto rápidamente a nuevos entornos y requisitos.",
      "Aporto soluciones vanguardistas a cualquier proyecto.",
    ],
  },
  {
    title: "Visión Integral de los Sistemas",
    icon: Network,
    description: [
      "Mi formación en Ingeniería de Sistemas me brinda una comprensión holística del software.",
      "Domino el ciclo de vida del desarrollo, del frontend al backend y bases de datos.",
      "Garantizo soluciones robustas y escalables.",
    ],
  },
  {
    title: "Colaboración y Trabajo en Equipo",
    icon: Users,
    description: [
      "Valoro la comunicación abierta y el trabajo colaborativo.",
      "Me integro eficazmente en equipos multidisciplinarios.",
      "Contribuyo a alcanzar objetivos comunes y potenciar el rendimiento colectivo.",
    ],
  },
  {
    title: "Compromiso con la Calidad y el Detalle",
    icon: CheckCircle,
    description: [
      "Entrego código limpio, bien documentado y probado.",
      "Presto atención a los detalles para asegurar la fiabilidad.",
      "Busco la excelencia en cada entrega.",
    ],
  },
  {
    title: "Iniciativa y Autonomía",
    icon: Rocket,
    description: [
      "No espero instrucciones; busco activamente oportunidades de mejora.",
      "Propongo soluciones y optimizaciones de manera proactiva.",
      "Impulso proyectos con autonomía y responsabilidad.",
    ],
  },
];

//Carrousel para la parte del porque me deberian contratar. Usa las cards genericas definidas para este carrousel.
export default function WhyHireMeCarousel() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {WhyHireMeCardsData.map((entry, index) => (
          <CarouselItem key={index}>
            <WhyHireMeCard
              title={entry.title}
              description={entry.description}
              Icon={entry.icon}
            ></WhyHireMeCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
