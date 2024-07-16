import { ReactNode } from "react"



interface ShowcaseContentProps {
    children: ReactNode
}

export default function ShowcaseContent({children}: ShowcaseContentProps) {
    return (
        <div className="flex flex-col justify-end h-full w-full">
            <div className=" flex justify-center bg-gradient-to-r from-black to-transparent full p-5 w-full">
                <div className="w-[1080px] ">
                {children}
                </div>
            </div>
        </div>
    )
}