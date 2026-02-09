import React, { ReactNode, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

type FAQProps = {
  faqObject?: Record<string, string>;
};

export default function FAQ({
  faqObject = {
    "testtesttesttesttesttesttesttesttesttesttesttest": "answer",
    "test1": "answer1",
    "test2": "answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2answer2",
  }
}: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const [faqList, setFaqList] = React.useState<[string, string][]>([])
  

  useEffect(() => {
    setFaqList(Object.entries(faqObject))    
  }, [])

  return (
    <div>
      {faqList.map(([key, value], index) => (
        <FaqBar question={key} openIndex={openIndex} setOpenIndex={setOpenIndex} index={index} key={index}>
          {value}  
        </FaqBar>
      ))}
    </div>
  )
}

export function FaqBar({
  children,
  openIndex,
  setOpenIndex,
  index,
  question
}: {
  children: ReactNode,
  openIndex: number | null,
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>,
  index: number,
  question: string
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = React.useState<string>("")
  
  const handleClick = () => {
    if (index == openIndex) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  useEffect(() => {
    if (openIndex === index && containerRef.current) {
      setHeight(`${containerRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [openIndex, index]);

  return (
    <div className="border-gray-300 border-b">
      <div onClick={() => handleClick()} className="flex justify-between items-center w-full p-3 py-4">
        <div className="break-words whitespace-normal font-bold w-[90%]">
          {index + 1}. {question}
        </div>

        <div className={`transform transition-transform duration-300  ${openIndex == index ? "rotate-180" : ""}`}>
          <IoIosArrowDown></IoIosArrowDown>
        </div>
      </div>
      <div
        ref={containerRef}
        style={{
          height
        }}
        className={`overflow-hidden h-full transition-all duration-500`}
        >
          <p className="break-words text-gray-700 p-4 rounded-2xl whitespace-normal">
            {children}
          </p>
      </div>
    </div>
  )
}
