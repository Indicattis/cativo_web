import { ReactNode } from "react"



interface CardIconProps {
    icon: ReactNode
}


export default function CardIcon({icon}: CardIconProps) {
    return (
        <div className="bg-gradient-to-bl to-purple from-contrast_color_2 rounded-2xl text-white p-3">
            {icon}
        </div>
    )
}