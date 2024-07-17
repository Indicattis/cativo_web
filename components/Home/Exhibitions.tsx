"use client"

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Exhibition } from "./Exhibition";
import { Sliders } from "./Exhibition/Exhibitions";
import Slider_1 from "./Exhibition/Exhibitions/Slide-1";
import ExhibitionControllers from "./Exhibition/ExhibitionControllers";





export default function ExhibitionComponent( ) {

    const [selectedItem, setSelectedItem] = useState<number>(1);

    return (
        <Exhibition.Root>
            <Exhibition.Sliders 
            data={
                [
                <Slider_1 key={`slider-1`}/>
            ]}
            numOfSliders={1}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            >

            </Exhibition.Sliders>
            <ExhibitionControllers handleItemClick={setSelectedItem} selectedItem={selectedItem} data={[0]}/>
        </Exhibition.Root>
    )
}

