import { ReactNode } from "react"




interface RootContentProps {
    className: string
    children: ReactNode
}



export default function RootContent({children, className}: RootContentProps) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}