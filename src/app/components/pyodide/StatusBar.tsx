type StatusBarProps = {
    children: string;
    className?: string;
    type: "alert" | "info"
}

export default function StatusBar({ children, className, type }: StatusBarProps) {
    let barClass = ""

    switch(type) {
        case "alert":
            barClass = "border-red-600 text-red-950";
            break;
        case "info":
            barClass = "border-blue-600 text-blue-950";
            break;
        default:
            barClass = ""
    }



    return (
        <div className={`border rounded px-2 py-1 ${barClass} ${className}`}>{children}</div>
    );
}
