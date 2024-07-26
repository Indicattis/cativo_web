import { ReactNode } from "react"



interface ShowcaseContentProps {
    children: ReactNode
}

export default function ShowcaseContent({children}: ShowcaseContentProps) {
    return (
        <div className="flex flex-col justify-around h-full w-full">
            <div className=" flex justify-center w-full">
                <div className="w-[1080px] flex flex-col gap-3">
                {children}
                </div>
            </div>
        </div>
    )
}