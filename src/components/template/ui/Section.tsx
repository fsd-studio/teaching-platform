import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode,
  id?: string,
  outerClassName?: string,
  innerClassName?: string
}

function Section({
    id = "#",
    children,
    outerClassName = "",
    innerClassName = "",
  }: SectionProps) {
  return (
    <section id={id} className={`${outerClassName} py-10 md:py-18 px-6 md:px-10 overflow-hidden`.trim()}>
      <div className={`${innerClassName} lg:max-w-[1160px] mx-auto`.trim()}>
          {children}
      </div>
    </section>
  );
}

export default Section;