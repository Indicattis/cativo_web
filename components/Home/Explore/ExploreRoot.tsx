import { ReactNode } from "react"


interface ExploreRootProps {
    children: ReactNode
}


export default function ExploreRoot({children}: ExploreRootProps) {
    return (
        <div className="w-full flex flex-col gap-10 h-full">
            {children}
        </div>
    )
}