import { ReactNode } from "react";





interface ShowcaseRootProps {
    children: ReactNode
    className: string
}

export default function ShowcaseRoot({children, className}: ShowcaseRootProps) {
    return (
        <div className={"h-full w-full flex relative "+ className}>
            {children}
        </div>
    )
}