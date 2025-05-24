import SectionHeader from "@/components/molecules/SectionHeader";
import WhyHireMeCarousel from "@/components/organisms/WhyHireMeCarousel";

export default function WhyHireMeSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title="¿Por Qué Contratarme?"
        description="Más allá de mis habilidades técnicas, esta sección destaca el valor único que aporto a cada proyecto y equipo. Descubre mis cualidades clave como desarrollador y cómo mi enfoque proactivo y pensamiento integral pueden beneficiar a tu empresa."
      ></SectionHeader>
      <div className="flex items-center justify-center align-middle">
        <WhyHireMeCarousel />
      </div>
    </div>
  );
}
