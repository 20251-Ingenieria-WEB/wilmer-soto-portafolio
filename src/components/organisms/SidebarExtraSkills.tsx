import Header1 from "@/components/atoms/Header1";
import LabelExtraSkills from "@/components/molecules/LabelExtraSkills";

export default function SidebarExtraSkills() {
  return (
    <div className="flex flex-col gap-y-2">
      <Header1>Habilidades extras</Header1>
      <LabelExtraSkills>Github, Git, GitHub Actions</LabelExtraSkills>
      <LabelExtraSkills>NextJS, TailwindCSS</LabelExtraSkills>
      <LabelExtraSkills>SpringBoot</LabelExtraSkills>
      <LabelExtraSkills>Docker, Docker Compose</LabelExtraSkills>
      <LabelExtraSkills>PostgreSQL, DBeaver</LabelExtraSkills>
      <LabelExtraSkills>APIs REST, Postman</LabelExtraSkills>
    </div>
  );
}
