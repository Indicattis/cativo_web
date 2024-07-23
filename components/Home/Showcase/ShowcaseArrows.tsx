import { Button } from "@/components/utils/Button";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useState } from "react";




interface ShowcaseArrowsProps {
    toLeft: () => void
    toRight: () => void
}


export default function ShowcaseArrows({toLeft, toRight}: ShowcaseArrowsProps) {
    return (
        <div className="absolute w-full flex p-3 justify-between">
                <ShowcaseArrow onClick={toLeft} direction="toLeft"/>
                <ShowcaseArrow onClick={toRight} direction="toRight"/>
        </div>
    )
}

interface ShowcaseArrowProps {
    direction: "toLeft" | "toRight"
    onClick: () => void
}
function ShowcaseArrow({direction, onClick}: ShowcaseArrowProps) {
    const [hover, setHover] = useState<boolean>(false)
    return (
        <div 
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <Button.Wide rounded="full" wide="full" variant={hover ? "default" : "disabled"} onClick={onClick}>
                <Button.Icon icon={
                    direction == "toRight" ? (
                        <IconCaretRightFilled width={30} height={30}/>
                    ) : (
                        <IconCaretLeftFilled width={30} height={30}/>
                    )
                    }/>
            </Button.Wide>
        </div>
    )
}