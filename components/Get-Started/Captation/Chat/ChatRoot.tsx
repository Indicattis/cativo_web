import { ReactNode } from "react";





interface ChatRootProps {
    children?: ReactNode,

}

export default function ChatRoot ({children}: ChatRootProps) {
    return (
        
        <div className="flex flex-col gap-6 w-full justify-end h-full">
            {children}
        </div>
    )
}
