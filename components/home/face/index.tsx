"use client";

import { useState } from "react";
import SliderComponent from "@/components/inc/slider";
import { intro_sliders } from "@/data/json/sliders/intro";
import ColaboratesComponent from "./colaborates";
import colaborates_array from "@/data/json/colaborates";
import BackgroundComponent from "@/components/inc/backgrounds";
import ExhibitionComponent from "./exhibition";

export default function FaceComponent() {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  return (
    <section className="_section min-h-[50vh] max-h-[75vh] z-10 relative overflow-hidden">
      <div className="w-full h-[70vh] flex items-center justify-center flex-col">
        <SliderComponent
          showControllers
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          numOfSliders={2}
          data={[
            <BackgroundComponent
              key={`slider-case-1`}
              content={<ExhibitionComponent color="neon_pink"/>}
              theme="neon_pink"
            ></BackgroundComponent>,
            <BackgroundComponent
              key={`slider-case-2`}
              content={<ColaboratesComponent data={colaborates_array} />}
              theme="neon_purple"
            ></BackgroundComponent>,
          ]}
        />
      </div>
    </section>
  );
}
