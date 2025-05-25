import SectionHeader from "@/components/molecules/SectionHeader";
import EducationCard from "@/components/molecules/EducationCard";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import React from "react";

const EducationData = [
  {
    institution: "Universidad de Antioquia",
    dateRange: "2020-2025",
    degree: "Ingeniero de Sistemas",
    description:
      "Profundizando en los fundamentos de la informática, algoritmos, estructuras de datos, y el desarrollo de sistemas complejos.",
  },
  {
    institution: "Curso Oficial NextJS",
    dateRange: "2025",
    degree: "Fundamentos de React y App Router NextJS",
    description:
      "Dominio de los principios esenciales de React para construir interfaces de usuario dinámicas, complementado con la arquitectura moderna y capacidades de renderizado del App Router de Next.js para aplicaciones de alto rendimiento.",
  },
];

export default function EducationSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title="Educacion"
        description="Mi trayectoria educativa ha sido clave para establecer una base sólida en el ámbito de la ingeniería, preparándome con las herramientas teóricas para enfrentar los desafíos del mundo real."
      ></SectionHeader>
      <div className="flex flex-col gap-y-5 bg-white p-2 sm:p-8">
        {EducationData.map((entry, index) => (
          <React.Fragment key={index}>
            <EducationCard
              institution={entry.institution}
              dateRange={entry.dateRange}
              degree={entry.degree}
              description={entry.description}
            ></EducationCard>
            {index < EducationData.length - 1 && <HorizontalDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
