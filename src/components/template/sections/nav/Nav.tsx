import { ReactNode } from 'react';
import Section from '@/components/template/ui/Section';
import { NAV_ITEMS } from '@/constants/navigation';

type NavProps = {
  children?: ReactNode, 
  logo?: string,
}

export default function Nav ({ 
  children, 
}: NavProps) {
  const links = NAV_ITEMS;

  return (
    <nav>
      <Section outerClassName="!py-0 backdrop-blur-lg h-fit z-10 bg-green-50/30 w-full fixed ">
        <div className='flex items-center h-16 justify-between w-full'>
          {/* Logo */}
          <div className='flex items-center'>
            <h4 className='font-primary-bold text-4xl md:text-5xl'>Dr Somogyi Krisztina</h4>
          </div>

          {children}
          
          <div>
            {/* <LangSwitcherMinimalist /> */}
          </div>

          {/* Large screen navigation */}
          <div className='hidden lg:flex gap-6'>
            {links.map((title, index) => (
              <a key={index} className='font-primary-bold text-3xl' href={`/#${title}`}>{title}</a>
            ))}
          </div>
        </div>
      </Section>
    </nav>
  )
}