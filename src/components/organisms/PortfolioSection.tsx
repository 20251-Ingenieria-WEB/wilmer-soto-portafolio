import SectionHeader from "@/components/molecules/SectionHeader";
import PortfolioCard from "@/components/molecules/PortfolioCard";

const PortfolioData = [
  {
    image: "",
    imageAlt: "",
    title: "Gestion y carga de documentos",
    description: "",
    longDescription: "",
    githubLink: "",
  },
];

export default function PortfolioSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title="Mis proyectos"
        description="Esta sección presenta una selección de mis proyectos personales y académicos, ilustrando mi proceso de desarrollo y la diversidad de tecnologías que he empleado."
      ></SectionHeader>
      <div className="flex items-end gap-x-4 overflow-x-auto">
        {PortfolioData.map((entry, index) => (
          <PortfolioCard
            key={index}
            image={entry.image}
            imageAlt={entry.imageAlt}
            title={entry.title}
            description={entry.description}
            longDescription={entry.image}
            githubLink={entry.image}
          ></PortfolioCard>
        ))}
      </div>
    </div>
  );
}
