import { ReactNode } from "react";
import FSDImage from "./FSDImage";
import Section from "./Section";
import Title from "./Title";

function BackgroundImageSection({
    src,
    title,
    innerC,
    outerC,
    children
}: {
    src: string,
    title: string,
    innerC: string,
    outerC: string,
    children: ReactNode
}) {
  return (
    <Section outerClassName={outerC} innerClassName={innerC}>
      {/* Background Image */}
      <FSDImage
        quality={100}
        src={src}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 px-6 py-12 bg-black/30 backdrop-blur-md rounded-xl max-w-4xl mx-auto text-center">
        
        {title && <Title className="!no-underline text-5xl md:text-5xl font-bold text-white mb-6">
            {title}
          </Title>}
        <p className="text-lg md:text-xl text-white">{children}</p>
      </div>
    </Section>
  );
}

export default BackgroundImageSection;