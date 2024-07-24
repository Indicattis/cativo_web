

interface CardTextProps {
    text: string
    sub_text: string
}


export default function CardText({text, sub_text}: CardTextProps) {
    return (
        <div className=" w-full p-3 text-center">
            <p className="_text font-bold">{text}</p>
            <p className="_text text-palette_gray">{sub_text}</p>
        </div>
    )
}