import { ReactNode } from "react"


interface ExploreCardsProps {
    children: ReactNode
}


export default function ExploreCards({children}: ExploreCardsProps) {
    return (
        <div className="grid grid-cols-3 gap-5 w-full">
            {children}
        </div>
    )
}