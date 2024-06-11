import getColor from "@/components/utils/getColor";
import colaborates_array from "@/data/json/colaborates";
import ColaborateDTO from "@/data/types/colaborates";
import {
  IconAffiliate,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconCategoryFilled,
  IconPointFilled,
} from "@tabler/icons-react";
import Image from "next/image";

interface ColaboratesProps {
    data: ColaborateDTO[]
}

export default function ColaboratesComponent(data: ColaboratesProps) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center z-20 gap-5">
        <div className=" z-20 p-3">
            <h1 className="_display_text flex gap-2"><IconAffiliate/>Profissionais</h1>
            <p className="_text text-zinc-400">Colaboradores capacitados e especializados por área.</p>
        </div>
      <div className="flex flex-col gap-3 w-full max-w-[380px]">
        {colaborates_array.map((colab, index) => {
            return (
                <Colaborate
                key={`colab-${index}`}
                age={colab.age}
                img={colab.img}
                name={colab.name}
                role={colab.role}
                skills={colab.skills}
                theme={colab.theme}
              />
            )
        })}
      </div>
    </div>
  );
}



export function Colaborate({ img, name, role, age, skills, theme }: ColaborateDTO) {
  return (
    <div className="flex gap-3 relative p-3 items-center justify-between cursor-pointer w-full max-md:w-full">
      <div className={`overflow-hidden rounded-full h-[90px] w-[90px] border-2 z-20`}>
        <Image
          alt=" "
          src={img}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-1 w-full z-20">
        <h1 className="_text ">
          {name}
        </h1>
        <div className="flex gap-1 _text _small items-center">
          <span className="text-zinc-400">
            {role}
          </span>
          <span className="text-zinc-400"><IconPointFilled width={10}/></span>
          <span className="text-zinc-400">
            {age} anos
          </span>
        </div>
        <div className="flex gap-2 items-center justify-between max-w-[300px]">
            {skills.map((sk, index) => {
                return (
                <div key={`skill-${name}-${index}`} className="">
                    {sk}
                </div>
                )
            })}
            <div className="flex gap-2 z-20">
              <div className={` _text _small text-center flex py-1 px-2 rounded-md font-bold text-black ${getColor(theme)}`}>ver mais</div>
            </div>
        </div>
      </div>
      <div className={`absolute w-full h-full top-0 left-0 bg-gray z-10`}></div>
    </div>
  );
}
