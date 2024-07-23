import { IconSquareRoundedX, IconSquareXFilled, IconX } from "@tabler/icons-react";




interface ModalCloseProps {
    onClick?: () => void
}

export default function ModalClose({onClick}: ModalCloseProps) {
    return (
        <div className="absolute right-5 py-3 cursor-pointer" onClick={onClick}>
            <IconX></IconX>
        </div>
    )
}