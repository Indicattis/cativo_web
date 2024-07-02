import { DefaultProps } from "@/data/utils/default-props";







export default function RootContent({children, className}: DefaultProps) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}