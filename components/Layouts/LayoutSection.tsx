import { ReactNode } from "react";





interface LayoutSectionProps {
    children: ReactNode
    className: string
}



export default function LayoutSection({className, children}: LayoutSectionProps) {
    return (
        <div className={`h-full flex w-full items-center justify-center overflow-hidden ${className}`}>
            {children}
        </div>
    )
}