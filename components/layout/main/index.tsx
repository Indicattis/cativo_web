import { DefaultProps } from "@/components/utils/props";







export default function MainComponent({children, className}: DefaultProps) {
    return (
        <main className={`max-w-[1080px] py-3 !px-5 flex flex-col w-full `+ className}>
            {children}
        </main>
    )
}