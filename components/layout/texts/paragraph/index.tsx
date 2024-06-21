





type ParagraphType = {
    h1?: string,
    p?: string,
    className?: string
}

export default function ParagraphComponent({ h1, p, className }: ParagraphType) {
    return (
        <div className={`w-full  min-w-[280px] flex flex-col ${className}`}>
            <h1 className="_display_text">{h1}</h1>
            <p className="_text text-palette_gray">{p}</p>
        </div>
    )
}