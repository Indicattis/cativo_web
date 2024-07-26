"use client"


interface ShowcaseTextProps {
    p?: string,
    className?: string
    isPoused: boolean
}

export default function ShowcaseText({ p, className }: ShowcaseTextProps) {
    return (
        <div className={`w-full flex flex-col ${className}`}>
            
                {/* <span className="bg-neon_purple cursor-pointer flex rounded-full w-8 justify-center items-center h-8 text-black">
                    {itemActive && !isPoused ? (
                        <IconPlayerStopFilled width={20} />
                    ) : (
                        <IconPlayerPlayFilled width={20} />
                    )}
                </span> */}
                {/* Barra de progresso */}
                
            <p className="_text text-white">{p}</p>
        </div>
    )
}
