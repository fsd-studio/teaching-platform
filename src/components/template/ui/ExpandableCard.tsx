import { ReactNode, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ExpandableCard({ 
  children,
  title = "no title",
  subTitle = "no subTitle",
  summary = "no summary",
  className = "border-blue-300 bg-blue-300/20"
 }: {
  children: ReactNode,
  title?: string,
  subTitle?: string,
  summary?: string,
  className?: string
 }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${className} py-6 px-8 flex flex-col rounded-2xl border-3 border-dashed`}>
      <h3 className="font-primary text-5xl mb-2">{title}</h3>
      <h3 className="font-secondary text-xl mb-5">{subTitle}</h3>
      <p>
        {summary}
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 mt-4 text-primaryk hover:text-blue-900 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{isOpen ? 'Show less' : 'Read more!'}</span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
