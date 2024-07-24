import { Button } from "@/components/utils/Button";




interface EvaluetionEndProps {
    changeStage: (stage: number) => void
    isActive: boolean
}

export default function EvaluetionEnd({changeStage, isActive}: EvaluetionEndProps) {
    return (
        isActive && (
            <div className="flex flex-col gap-3 min-w-96">
                <h1 className="_display_text">Obrigado!</h1>
                <p className="_text">Agradecemos sua avaliação.</p>
                <Button.Wide variant="purple" rounded="md" wide="lg" type="button"  onClick={() => window.location.href = "/"}>
                    <Button.Text text="Fechar" />
                </Button.Wide>
            </div>
        )
    )
}