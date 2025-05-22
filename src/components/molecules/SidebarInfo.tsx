import LabelValue from "@/components/molecules/LabelValue";

export default function SidebarInfo() {
  return (
    <div className="flex flex-col gap-y-1">
      <LabelValue first="Edad:" second="22"></LabelValue>
      <LabelValue first="Ciudad:" second="Medellin"></LabelValue>
      <LabelValue first="Email:" second="wsoto04@gmail.com"></LabelValue>
    </div>
  );
}
