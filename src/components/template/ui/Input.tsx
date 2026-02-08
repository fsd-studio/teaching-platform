import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

function Input({
    label,
    textarea,
    type = "text",
    name = "",
    onChange,
    value
}: {
    label: string,
    textarea: boolean,
    type: HTMLInputTypeAttribute,
    name: string,
    onChange: ChangeEventHandler,
    value: string
}) {
  return (
    <div className="flex flex-col w-full">
        { textarea ? 
            <textarea value={value} onChange={onChange} name={name} placeholder={label} rows={3} className="py-3 text-black border-primary focus:bg-primary/10 px-2 focus:outline-0 border-b" id={label} />
            :
            <input value={value} onChange={onChange} name={name} placeholder={label} className="py-3 text-black border-primary focus:bg-primary/10 px-2 focus:outline-0 border-b " id={label} type={type} />
        }
    </div>
  );
}

export default Input;