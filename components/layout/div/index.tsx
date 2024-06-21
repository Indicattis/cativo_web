import { DefaultProps } from "@/components/utils/props";









export default function DivComponent({className, children}: DefaultProps) {
    return (
        <div className={`h-full flex w-full items-center justify-center ${className}`}>
            {children}
        </div>
    )
}