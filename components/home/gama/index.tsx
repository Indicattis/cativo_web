import GamaItem from "./item";





export default function GamaComponent() {
    return (
        <section className="_section bg-gray  z-20">
            <div className="w-full max-w-[1080px]">
                <div className="w-full flex gap-4">
                    <GamaItem></GamaItem>
                    <GamaItem></GamaItem>
                    <GamaItem></GamaItem>
                    <GamaItem></GamaItem>
                    <GamaItem></GamaItem>
                    <GamaItem></GamaItem>
                </div>
            </div>
        </section>
    )
}