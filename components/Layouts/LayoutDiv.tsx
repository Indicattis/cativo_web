import { ReactNode } from "react";






interface LayoutDivProps {
    children: ReactNode
    className: string
}


export default function LayoutDiv({className, children}: LayoutDivProps) {
    return (
        <div className={`h-full flex w-full items-center justify-center ${className}`}>
            {children}
        </div>
    )
}