import SectionHeader from "@/components/molecules/SectionHeader";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import {
  MonitorSmartphone,
  Server,
  Database,
  Workflow,
  Network,
  ListCheck,
} from "lucide-react";

const knowledgeData = [
  {
    title: "Desarrollo Web",
    description: "Next.js, Tailwind CSS, HTML, CSS, JavaScript/TypeScript",
    Icon: MonitorSmartphone,
  },
  {
    title: "Desarrollo Backend",
    description: "Spring Boot, APIs REST, Java",
    Icon: Server,
  },
  {
    title: "Bases de Datos",
    description: "PostgreSQL, DBeaver, SQL",
    Icon: Database,
  },
  {
    title: "Herramientas de Desarrollo y DevOps",
    description:
      "Git, GitHub, Docker, GitHub Actions, Docker Compose, Azure DevOps",
    Icon: Workflow,
  },
  {
    title: "Gestión de APIs e Integración",
    description: "RESTful APIs, GraphQL, Postman",
    Icon: Network,
  },
  {
    title: "Metodologia",
    description: "Agile, Scrum, Trello",
    Icon: ListCheck,
  },
];

export default function KnowledgeSection() {
  return (
    <div className="flex flex-col gap-y-4 text-wrap">
      <SectionHeader
        title="Mis conocimientos"
        description="Explora aquí un resumen de mis habilidades y las tecnologías clave que domino como desarrollador de software."
      />
      <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledgeData.map((card, index) => (
          <KnowledgeCard
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
}
