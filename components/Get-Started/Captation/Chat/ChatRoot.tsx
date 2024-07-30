import { ReactNode } from "react";





interface ChatRootProps {
    children?: ReactNode,

}

export default function ChatRoot ({children}: ChatRootProps) {
    return (
        
        <div className="relative flex flex-col gap-6 w-[367px] min-h-[420px] bg-contrast_color_2 p-3 rounded-lg justify-end h-full pt-20">
            {children}
        </div>
    )
}
