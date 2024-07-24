import { ReactNode } from "react"



interface CardRootProps {
    children: ReactNode
}


export default function CardRoot({children}: CardRootProps) {
    return (
        <div className="relative flex flex-col p-3 justify-center items-center gap-5 overflow-hidden h-64">
            {children}
        </div>
    )
}