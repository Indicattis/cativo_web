


interface EvaluetionRootProps {
    children: React.ReactNode
}

export default function EvaluetionRoot({children}: EvaluetionRootProps) {
    return (
        <div className="w-full flex items-center justify-center">{children}</div>
    )
}