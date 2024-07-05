import { ReactNode } from "react"



interface ShowcaseContentProps {
    children: ReactNode
}

export default function ShowcaseContent({children}: ShowcaseContentProps) {
    return (
        <div className=" w-[400px] flex flex-col items-center justify-center max-md:w-full z-50">
            {children}
        </div>
    )
}