import { ReactNode } from "react"



interface ShowcaseContentProps {
    children: ReactNode
}

export default function ShowcaseContent({children}: ShowcaseContentProps) {
    return (
        <div className="flex flex-col justify-end h-full w-full z-20">
            <div className=" flex justify-center bg-[#0000008c] full p-5 z-20 w-full">
                <div className="w-[1080px] z-20">
                {children}
                </div>
            </div>
        </div>
    )
}