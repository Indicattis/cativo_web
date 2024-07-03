import { Button } from "../Button";




interface ModalButtonProps {
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalButton({onClick}: ModalButtonProps) {
    return (
        <Button.Wide rounded="full" variant="default" wide="md" onClick={() => onClick(false)}>
            <Button.Text text="Entendi"/>
        </Button.Wide>
    )
}