import Link from "next/link";
import { ReactNode } from "react";

function LinkWrapper({
  children, className, link
}: {
  children: ReactNode,
  className?: string,
  link: string
}) {
  return (
    <Link href={link} className={className} target="_blank">
      <span className="font-bold text-green-900 hover:text-green-900/70">
        {children}
      </span>
    </Link>
  );
}

export default LinkWrapper;