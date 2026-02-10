import { ReactNode } from "react";

type TimetableRowProps = {
  label: ReactNode;
  value: string;
}

export default function TimetableRow({ label, value }: TimetableRowProps) {
  return (
    <div
      className="border-b-2 w-full px-9 border-green-200 bg-green-50 gap-2 flex flex-col rounded-4xl items-center justify-between p-2"
    >
      <p className="relative text-xl md:text-3xl font-light font-primary mt-2">
        {label}
      </p>

      <p className="font-primary font-thin text-green-950 text-xl md:text-2xl">
        {value}
      </p>
    </div>
  );
};
