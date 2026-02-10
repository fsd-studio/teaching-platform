import { ReactNode } from "react";

type TimetableRowProps = {
  label: ReactNode;
  value: string;
}

export default function TimetableRow({ label, value }: TimetableRowProps) {
  return (
    <div
      className="border-b-2 w-full border-green-200 bg-green-50 flex justify-between p-2"
    >
      <p className="font-bold relative text-xl lg:text-2xl font-secondary mt-2">
        {label}
      </p>

      <p className="font-primary-bold text-green-950 text-3xl lg:text-4xl">
        {value}
      </p>
    </div>
  );
};
