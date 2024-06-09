import getColor from "@/components/utils/getColor";
import colaborates_array from "@/data/json/colaborates";
import ColaborateDTO from "@/data/types/colaborates";
import {
  IconAffiliate,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";

interface ColaboratesProps {
    data: ColaborateDTO[]
}

export default function ColaboratesComponent(data: ColaboratesProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center z-20 gap-5">
        <div className=" z-20  w-full p-3 rounded-lg">
            <h1 className="text-xl flex gap-2"><IconAffiliate/>Profissionais</h1>
            <span className="text-xs font-poppins normal-case tracking-normal text-zinc-400">Colaboradores capacitados e especializados por área</span>
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



function Colaborate({ img, name, role, age, skills, theme }: ColaborateDTO) {
  return (
    <div className="flex gap-3 relative p-3 items-center justify-between cursor-pointer">
      <div className={`overflow-hidden rounded-full h-20 min-w-20 border-2 z-20`}>
        <Image
          alt=" "
          src={img}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-1 w-full z-20">
        <h1 className="font-poppins normal-case tracking-normal">
          {name}
        </h1>
        <div className="flex gap-2">
          <span className="font-poppins normal-case tracking-normal text-xs text-zinc-400 font-bold">
            {role}
          </span>
          <span className="font-poppins normal-case tracking-normal text-xs text-zinc-400 font-bold">
            {age}
          </span>
        </div>
        <div className="flex gap-2">
            {skills.map((sk, index) => {
                return (
                <div key={`skill-${name}-${index}`} className="">
                    {sk}
                </div>
                )
            })}
        </div>
      </div>
      <div className="flex flex-col gap-2 z-20">
        <div className={`p-1 rounded-md ${getColor("neon_purple")}`}><IconBrandLinkedin/></div>
        <div className={`p-1 rounded-md ${getColor("neon_red")}`}><IconBrandYoutube/></div>
      </div>
      <div className="absolute w-full h-full rounded-lg top-0 left-0 bg-gradient-to-t from-dark to-gray z-10 opacity-70"></div>
    </div>
  );
}
