import React from "react";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h2 className={`font-secondary text-2xl md:text-3xl ${className}`}>
      {children}
    </h2>
  );
}
