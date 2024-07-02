
interface CaptationRootProps {
    children: React.ReactNode
}


export default function CaptationRoot({children}: CaptationRootProps) {
    return (
        <div className="w-full h-[400px] flex flex-col">
            {children}
        </div>
    )
}