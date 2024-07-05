import { ReactNode } from "react";





interface ShowcaseRootProps {
    children: ReactNode
    className: string
}

export default function ShowcaseRoot({children, className}: ShowcaseRootProps) {
    return (
        <div className={"h-full w-full flex relative items-center justify-start gap-5 "+ className}>
            {children}
        </div>
    )
}