"use client"

import { IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerStopFilled } from "@tabler/icons-react"
import { useState, useEffect } from "react"

interface ShowcaseTextProps {
    h1?: string,
    p?: string,
    id: number,
    className?: string
    setItemActive: (id: number) => void
    itemActive: boolean
}

export default function ShowcaseText({ h1, p, className, setItemActive, itemActive, id }: ShowcaseTextProps) {
    const [progress, setProgress] = useState<number>(0);
    const [isStopped, setIsStopped] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (itemActive && !isStopped) {
            const startTime = Date.now() - (progress * 100); // Continue from the current progress
            timer = setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                const percentage = (elapsedTime / 10000) * 100;
                setProgress(percentage);

                if (elapsedTime >= 10000) {
                    clearInterval(timer);
                    setItemActive(id + 1);
                    setProgress(0);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [setItemActive, itemActive, isStopped, id, progress]);

    const handleStop = () => {
        setIsStopped(true);
        setProgress(0);
        setItemActive(id); // Keep the current item active
    };

    return (
        <div className={`w-full min-h-[140px] min-w-[280px] flex flex-col rounded-3xl -ml-4 p-3 justify-center ${className}`}>
            <h1 className="_display_text flex gap-3 items-center">{h1} 
                <span className="bg-neon_purple cursor-pointer flex rounded-full w-8 justify-center items-center h-8 text-black">
                    {itemActive && !isStopped ? (
                        <IconPlayerStopFilled width={20} onClick={handleStop} />
                    ) : (
                        <IconPlayerPlayFilled width={20} onClick={() => { setIsStopped(false); setItemActive(id); }} />
                    )}
                </span>
                {/* Barra de progresso */}
                {itemActive && (
                    <div className="bg-contrast_color_1 w-[100px] h-1 rounded-full">
                        <div 
                            className="bg-neon_purple h-1 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                )}
            </h1>
            <p className="_text text-palette_gray max-md:text-white">{p}</p>
        </div>
    )
}
