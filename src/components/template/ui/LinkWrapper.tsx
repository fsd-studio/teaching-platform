import Link from "next/link";
import { ReactNode } from "react";

function LinkWrapper({
    children, className, link
  }: {
    children: ReactNode,
    className: string,
    link: string
  }) {
  return (
    <Link href={link} className={className}>
        {children}
    </Link>
  );
}

export default LinkWrapper;