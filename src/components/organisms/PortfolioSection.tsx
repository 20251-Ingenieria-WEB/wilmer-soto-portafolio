import SectionHeader from "@/components/molecules/SectionHeader";
import PortfolioCarousel from "@/components/organisms/PortfolioCarousel";

export default function PortfolioSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title="Mis proyectos"
        description="Esta sección presenta una selección de mis proyectos personales y académicos, ilustrando mi proceso de desarrollo y la diversidad de tecnologías que he empleado."
      ></SectionHeader>
      <div className="flex items-center justify-center pr-5 pl-5 align-middle">
        <PortfolioCarousel />
      </div>
    </div>
  );
}
