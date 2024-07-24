import { Button } from "../Button";




interface ModalButtonProps {
    onClick: React.Dispatch<React.SetStateAction<boolean>>
    text?: string
}

export default function ModalButton({onClick, text}: ModalButtonProps) {
    return (
        <Button.Wide rounded="sm" variant="default" wide="lg" onClick={() => onClick(false)}>
            <Button.Text text={text ? text : "Entendi"}/>
        </Button.Wide>
    )
}