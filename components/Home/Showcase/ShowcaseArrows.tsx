import { Button } from "@/components/utils/Button";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";




interface ShowcaseArrowsProps {
    toLeft: () => void
    toRight: () => void
}


export default function ShowcaseArrows({toLeft, toRight}: ShowcaseArrowsProps) {
    return (
        <div className="absolute w-full flex justify-around p-3 max-lg:justify-between">
            <Button.Wide rounded="full" wide="full" variant="disabled" onClick={toLeft}>
                <Button.Icon icon={<IconCaretLeftFilled width={30} height={30}/>}/>
            </Button.Wide>
            
            <Button.Wide rounded="full" wide="full" variant="disabled" onClick={toRight}>
                <Button.Icon icon={<IconCaretRightFilled width={30} height={30}/>}/>
            </Button.Wide>
        </div>
    )
}