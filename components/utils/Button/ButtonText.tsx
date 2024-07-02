


interface ButtonTextProps {
    text: string
}

export default function ButtonText ({text}: ButtonTextProps) {
    return (
        <p className="font-bold uppercase">{text}</p>
    )
}