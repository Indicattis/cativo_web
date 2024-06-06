"use client";

import { useState } from "react";
import SliderComponent from "@/components/inc/slider";
import { intro_sliders } from "@/data/json/sliders/intro";

export default function FaceComponent() {
    const [selectedItem, setSelectedItem] = useState<number>(1);

    return (
        <section className="_section min-h-[50vh] max-h-[75vh] z-10 relative overflow-hidden">
            <div className="w-full h-[70vh] flex items-center justify-center flex-col">
                <SliderComponent showControllers selectedItem={selectedItem} setSelectedItem={setSelectedItem} numOfSliders={5} data={intro_sliders}/>
            </div>
        </section>
    );
}

