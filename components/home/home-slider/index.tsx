"use client";

import { useState } from "react";
import SliderComponent from "@/components/inc/slider";
import { intro_sliders } from "@/data/json/sliders/intro";
import ColaboratesComponent from "./colaborates";
import colaborates_array from "@/data/json/colaborates";
import BackgroundComponent from "@/components/inc/backgrounds";
import ExhibitionComponent from "./exhibition";
import Image from "next/image";

export default function FaceComponent() {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  return (
    <section className="_section min-h-[50vh] max-h-[100vh] h-screen z-10 relative overflow-hidden bg-[#000000]">
      <div className="w-full h-[80vh] flex items-center justify-center flex-col">
        <SliderComponent
          showControllers
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          numOfSliders={2}
          data={[
            <BackgroundComponent
              key={`slider-case-3`}
              content={
                <div className={` w-full h-full flex items-center justify-center`}>
                    <div className=" w-full h-full flex justify-center items-center max-lg:w-[85%]">
                        <Image draggable={false} width={600} height={600} alt="" src={`/img/cativo-logo.png`} />
                    </div>
                </div>}
              theme="neon_purple"
            ></BackgroundComponent>,
            <ExhibitionComponent
            key={`slider-case-2`} color="neon_purple" />
          ]}
        />
      </div>
    </section>
  );
}
