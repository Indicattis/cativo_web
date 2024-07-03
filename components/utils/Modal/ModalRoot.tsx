import { ReactNode } from "react"





interface ModalRootProps {
    children: ReactNode
}

export default function ModalRoot({children}: ModalRootProps) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[9999] bg-[#000000a1]">
            {children}
        </div>
    )
}