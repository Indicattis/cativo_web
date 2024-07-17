import { Button } from "../Button";




interface ModalButtonProps {
    onClick: React.Dispatch<React.SetStateAction<boolean>>
    text?: string
}

export default function ModalButton({onClick, text}: ModalButtonProps) {
    return (
        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => onClick(false)}>
            <Button.Text text={text ? text : "Entendi"}/>
        </Button.Wide>
    )
}