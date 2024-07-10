import { HTMLAttributes, ReactNode } from "react";




interface ModalContentProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}


export default function ModalContent({children, ...rest}: ModalContentProps) {
    return (
        <div {...rest}>{children}</div>
    )
}