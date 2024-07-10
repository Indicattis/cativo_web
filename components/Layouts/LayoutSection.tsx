import { HTMLAttributes, ReactNode } from "react";





interface LayoutSectionProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
    className: string
}



export default function LayoutSection({className, children, ...rest}: LayoutSectionProps) {
    return (
        <div {...rest} className={`h-full flex w-full items-center justify-center overflow-hidden ${className}`}>
            {children}
        </div>
    )
}