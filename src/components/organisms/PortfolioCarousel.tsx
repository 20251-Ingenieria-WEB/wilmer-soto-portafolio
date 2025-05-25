import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioCard from "@/components/molecules/PortfolioCard";

const PortfolioData = [
  {
    image: "/projects/gestion-documentos.png",
    imageAlt: "Vista de un programa de gestion de documentos",
    title: "Gestion y carga de documentos",
    description: "Gestion de carga de documentos de estudiantes",
    longDescription:
      "Pagina web para manejar y subir documentos de cursos. \nPermite visualizar documentos propios y del profesor de la materia. \nPermite descargar, editar y compartir documentos.",
    githubLink:
      "https://github.com/CodeFactory-EP17-InnoSistemas-Feature-5/Frontend",
  },
  {
    image: "/projects/gestion-inventario.png",
    imageAlt: "Vista de un programa de gestion de inventario",
    title: "Gestion de inventario",
    description: "Aplicacion para manejo de transacciones. Hecha en Python",
    longDescription:
      "Aplicacion para manejo de transacciones. Permite añadir ingreso, egresos y el concepto de la transaccion. \nTambien permite ver una lista combinada de transacciones o un lista separada por ingreso o egreso. \nPermite exportar a excel estas dos listas y la lista combinada.",
    githubLink: "https://github.com/WilmerSoto/Gestion-Inventario",
  },
  {
    image: "/projects/backend-pi2.png",
    imageAlt:
      "Vista de Github de proyecto de Autoevaluacion procesos de transformacion digital",
    title: "Autoevaluacion procesos de transformacion digital",
    description:
      "Backend para una pagina web para las autoevaluaciones de empresas con respecto a su transformacion digital.",
    longDescription:
      "Pagina web para autoevaluacion de transformacion digital. \nPosee registro y login de usuarios, una autoevaluacion de 7 partes y calculo del nivel actual de la empresa con respecto a la transformacion digital teniendo en cuenta diversas metricas. \nGenera reportes visuales y PDF teniendo en cuenta los resultados de la autoevaluacion.",
    githubLink: "https://github.com/ProyecetoIntegrador2/PI_backend",
  },
];

// Carrousel (usando Shadcn) usado para los proyectos. Usa las card ya definidas.
export default function PortfolioCarousel() {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {PortfolioData.map((entry, index) => (
          <CarouselItem key={index}>
            <PortfolioCard
              image={entry.image}
              imageAlt={entry.imageAlt}
              title={entry.title}
              description={entry.description}
              longDescription={entry.longDescription}
              githubLink={entry.githubLink}
            ></PortfolioCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
