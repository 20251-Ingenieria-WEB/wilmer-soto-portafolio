import LabelInfo from "@/components/molecules/LabelInfo";

export default function SidebarInfo() {
  return (
    <div className="flex flex-col my-3">
      <LabelInfo first="Edad" second="22"></LabelInfo>
      <LabelInfo first="Ciudad" second="Medellin"></LabelInfo>
    </div>
  );
}
