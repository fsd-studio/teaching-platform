import { FaArrowRight } from "react-icons/fa";
import FSDImage from "./FSDImage";
import Link from "next/link";
import Title from "./Title";
import Section from "@/components/template/ui/Section";

function ImageImageSection({
    title,
    srcL,
    altL,
    linkL,
    titleL,
    srcR,
    altR,
    linkR,
    titleR
}: {
    title: string,
    srcL: string,
    altL: string,
    linkL: string,
    titleL: string,
    srcR: string,
    altR: string,
    linkR: string,
    titleR: string
}) {
  return (
    <Section outerClassName="bg-primary/70">
      <Title>{title}</Title>
      <div className="relative flex flex-col md:flex-row w-full md:h-[400px] overflow-hidden rounded-3xl">
        {/* Left Side */}
        <Link href={linkL} className="relative w-full md:w-1/2 block h-full clip-left-responsive group">
          <FSDImage
            src={srcL}
            alt={altL}
            className="object-cover h-[300px] w-full md:h-full transform group-hover:scale-105 transition-all duration-200 ease-in"
          />
          <div className="absolute inset-0 bg-black/30 text-white items-start justify-start p-4">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl md:text-6xl font-primary font-bold">{titleL}</h2>
              <p className="items-center flex gap-3">
                see more{" "}
                <FaArrowRight className="inline group-hover:ms-1 transition-all" />
              </p>
            </div>
          </div>
        </Link>

        {/* Right Side */}
        <Link href={linkR} className="relative w-full md:w-1/2 h-full clip-right-responsive group">
            <FSDImage
                src={srcR}
                alt={altR}
                className="object-cover h-[300px] w-full md:h-full group-hover:scale-105 transition-all duration-200 ease-in"
            />
            <div className="absolute inset-0 bg-black/30 flex text-white items-end justify-start p-4">
                <div className="flex items-center gap-4">
                <h2 className="text-4xl md:text-6xl font-primary font-bold">{titleR}</h2>
                <p className="items-center flex gap-3">
                    see more{" "}
                    <FaArrowRight className="inline group-hover:ms-1 transition-all" />
                </p>
                </div>
            </div>
        </Link>
      </div>
    </Section>
  );
}

export default ImageImageSection;