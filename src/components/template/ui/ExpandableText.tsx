import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

export default function ExpandableText({ 
  children,
 }: {
  children: ReactNode
 }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const { t } = useTranslation('dabout')

  return (
    <div className="flex flex-col items-center">
      <div
        className={`overflow-hidden transition-all relative duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px] mt-4' : 'max-h-40 lg:max-h-80'
        }`}
      >
        {children}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 transition-opacity duration-500 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>

      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 -mt-2 text-primaryk hover:text-blue-900 transition-colors"
        aria-expanded={isOpen}
      >
        <span>{isOpen ? t('less') : t('more')}</span>
        <IoIosArrowDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}