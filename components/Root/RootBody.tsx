import { ReactNode } from "react"



interface RootBodyProps {
    className: string
    children: ReactNode
}



export default function RootBody({children, className}: RootBodyProps) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}