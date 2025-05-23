import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";
import HireMeButton from "@/components/molecules/HireMeButton";

export default function TextIntroduction() {
  return (
    <div className="flex flex-col gap-y-4">
      <Header1 className="text-3xl">
        Soy Wilmer Soto, <span className="text-yellow-500">desarrollador</span>{" "}
        e <span className="text-yellow-500">ingeniero de sistemas</span>.
      </Header1>
      <Text>
        Soy Wilmer Soto Vidal, estudiante de Ingeniería de Sistemas en la
        Universidad de Antioquia con experiencia como Desarrollador Front-end,
        creando interfaces modernas con Next.js y Tailwind CSS. Domino lenguajes
        como Python, JavaScript/TypeScript, Java, HTML y CSS, y mis habilidades
        se extienden al backend con Spring Boot, PostgreSQL, Docker y
        herramientas como Git, GitHub Actions y Postman.
      </Text>
      <div>
        <HireMeButton />
      </div>
    </div>
  );
}
