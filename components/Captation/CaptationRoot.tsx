
interface CaptationRootProps {
    children: React.ReactNode
}


export default function CaptationRoot({children}: CaptationRootProps) {
    return (
        <div className="w-full flex flex-col gap-10 justify-between relative">
            {children}
        </div>
    )
}