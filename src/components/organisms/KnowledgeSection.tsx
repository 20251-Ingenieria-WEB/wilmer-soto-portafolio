import SectionHeader from "@/components/molecules/SectionHeader";
import KnowledgeCards from "@/components/molecules/KnowledgeCards";
import {
  MonitorSmartphone,
  Server,
  Database,
  Workflow,
  Network,
  ListCheck,
} from "lucide-react";

export default function KnowledgeSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title="Mis conocimientos"
        description="Explora aquí un resumen de mis habilidades y las tecnologías clave que domino como desarrollador de software."
      />
      <div className="grid- grid grid-cols-3 grid-rows-2 gap-4">
        <KnowledgeCards
          title="Desarrollo Web"
          description="Next.js, Tailwind CSS, HTML, CSS, JavaScript/TypeScript"
          Icon={MonitorSmartphone}
        />
        <KnowledgeCards
          title="Desarrollo Backend"
          description="Spring Boot, APIs REST, Java"
          Icon={Server}
        />
        <KnowledgeCards
          title="Bases de Datos"
          description="PostgreSQL, DBeaver, SQL"
          Icon={Database}
        />
        <KnowledgeCards
          title="Herramientas de Desarrollo y DevOps"
          description="Git, GitHub, Docker, GitHub Actions, Docker Compose, Azure DevOps"
          Icon={Workflow}
        />
        <KnowledgeCards
          title="Gestión de APIs e Integración"
          description="RESTful APIs, GraphQL, Postman"
          Icon={Network}
        />
        <KnowledgeCards
          title="Metodologia"
          description="Agile, Scrum, Trello"
          Icon={ListCheck}
        />
      </div>
    </div>
  );
}
