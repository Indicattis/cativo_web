import { Button } from "@/components/utils/Button";
import { IconJewishStarFilled } from "@tabler/icons-react";






export default function ExploreButton() {
    return (
        <div className="w-full flex items-center justify-center">
            <Button.Wide rounded="full" variant="purple" wide="lg" onClick={() => window.location.href = "/get-started"}>
                <Button.Text text="Começar"/>
                <Button.Icon icon={<IconJewishStarFilled/>}/>
            </Button.Wide>
        </div>
    )
}