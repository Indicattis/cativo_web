import { ReactNode } from "react";




interface ModalMessageProps {
    message: string
}



export default function ModalMessage({message}: ModalMessageProps) {
    return (
        <div className="w-full">
            <h1 className="_display_text">{message}</h1>
        </div>
    )
}