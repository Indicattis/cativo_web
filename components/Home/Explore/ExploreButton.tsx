import { Button } from "@/components/utils/Button";
import ButtonText from "@/components/utils/Button/ButtonText";






export default function ExploreButton() {
    return (
        <div className="w-full flex items-center justify-center">
            <Button.Wide rounded="full" variant="purple" wide="lg" onClick={() => window.location.href = "/get-started"}>
                <ButtonText text="Começar"/>
            </Button.Wide>
        </div>
    )
}