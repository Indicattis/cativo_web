
interface CaptationRootProps {
    children: React.ReactNode
}


export default function CaptationRoot({children}: CaptationRootProps) {
    return (
        <div className="w-full flex flex-col gap-5 justify-around relative">
            {children}
        </div>
    )
}