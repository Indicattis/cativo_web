
interface CaptationRootProps {
    children: React.ReactNode
}


export default function CaptationRoot({children}: CaptationRootProps) {
    return (
        <div className="w-full flex flex-col gap-5 justify-between relative h-[680px]">
            {children}
        </div>
    )
}