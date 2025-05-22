interface LabelInfoProps {
  first: string;
  second: string;
}

export default function LabelInfo({ first, second }: LabelInfoProps) {
  return (
    <div className="flex justify-between items-center mx-5">
      <p>{first}: </p>
      <p>{second}</p>
    </div>
  );
}
