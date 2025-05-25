import LabelValue from "@/components/molecules/LabelValue";

const InfoData = [
  { first: "Edad:", second: "22" },
  { first: "Ciudad:", second: "Medellin" },
  { first: "Email:", second: "wsoto04@gmail.com" },
];

// Informacion personal del sidebar. Usa el label definido anteriormente.
export default function SidebarInfo() {
  return (
    <div className="flex flex-col gap-y-1">
      {InfoData.map((entry, index) => (
        <LabelValue
          key={index}
          first={entry.first}
          second={entry.second}
        ></LabelValue>
      ))}
    </div>
  );
}
