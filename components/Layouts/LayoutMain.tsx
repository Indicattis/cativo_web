import { ReactNode } from "react";






interface LayoutMainProps {
    children: ReactNode
    className: string
}




export default function LayoutMain({children, className}: LayoutMainProps) {
    return (
        <main className={`max-w-[1080px] py-3 !px-5 flex flex-col w-full `+ className}>
            {children}
        </main>
    )
}