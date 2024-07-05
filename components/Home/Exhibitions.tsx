"use client"

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Exhibition } from "./Exhibition";
import { Sliders } from "./Exhibition/Exhibitions";
import Slider_1 from "./Exhibition/Exhibitions/Slide-1";
import ExhibitionControllers from "./Exhibition/ExhibitionControllers";
import Slider_2 from "./Exhibition/Exhibitions/Slide-2";





export default function ExhibitionComponent( ) {

    const [selectedItem, setSelectedItem] = useState<number>(1);

    return (
        <Exhibition.Root>
            <Exhibition.Sliders 
            data={[<Slider_1 key={`slider-1`}/>, <Slider_2 key={`slider-2`}/>]}
            numOfSliders={2}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            >

            </Exhibition.Sliders>
            <ExhibitionControllers handleItemClick={setSelectedItem} selectedItem={selectedItem} data={[<Slider_1 key={`slider`}/>, <Slider_1 key={`slider`}/>]}/>
        </Exhibition.Root>
    )
}

