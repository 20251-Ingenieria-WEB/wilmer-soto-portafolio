import Header1 from "@/components/atoms/Header1";
import LabelExtraSkills from "@/components/molecules/LabelExtraSkills";

const ExtraSkillsData = [
  { skill: "Github, Git, GitHub Actions" },
  { skill: "NextJS, TailwindCSS" },
  { skill: "SpringBoot" },
  { skill: "Docker, Docker Compose" },
  { skill: "PostgreSQL, DBeave" },
  { skill: "APIs REST, Postman" },
];

export default function SidebarExtraSkills() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1 className="text-base">Habilidades extras</Header1>
      {ExtraSkillsData.map((entry, index) => (
        <LabelExtraSkills key={index}>{entry.skill}</LabelExtraSkills>
      ))}
    </div>
  );
}
