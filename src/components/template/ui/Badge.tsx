import { ReactNode } from "react";
import { GiFrog } from "react-icons/gi";

function Badge({
    children,
    badge = <GiFrog className='w-16 h-16 text-blue-800' />,
    className
}: {
  children: ReactNode,
  badge: ReactNode,
  className: string
}) {
  return (
    <div className='relative'>
        <div className={`p-3 absolute bg-white ${className} border-2 -right-2 -top-2 rounded-full`}>
            {badge}
        </div>
        <div>
            {children}
        </div>
    </div>
  );
}

export default Badge;