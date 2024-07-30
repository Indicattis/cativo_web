import { ReactNode } from "react"



interface RootBodyProps {
    className: string
    children: ReactNode
}



export default function RootBody({children, className}: RootBodyProps) {
    return (
        <main id="top" className={className}>
            {children}
        </main>
    )
}