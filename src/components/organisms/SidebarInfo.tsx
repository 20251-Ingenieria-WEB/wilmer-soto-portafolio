import LabelValue from "@/components/molecules/LabelValue";

const SidebarInfoData = [
  { first: "Edad:", second: "22" },
  { first: "Ciudad:", second: "Medellin" },
  { first: "Email:", second: "wsoto04@gmail.com" },
];

export default function SidebarInfo() {
  return (
    <div className="flex flex-col gap-y-1">
      {SidebarInfoData.map((entry, index) => (
        <LabelValue
          key={index}
          first={entry.first}
          second={entry.second}
        ></LabelValue>
      ))}
    </div>
  );
}
