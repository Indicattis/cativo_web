import ColaborateDTO from "@/data/types/colaborates";
import { IconBrandAdobe, IconBrandAws, IconBrandGithub, IconBrandNextjs, IconBrandNodejs, IconBrandPatreon, IconBrandPrisma, IconBrandReact, IconBrandTailwind, IconBrush, IconPhoto } from "@tabler/icons-react";


const colaborates_array: ColaborateDTO[] = [
    {
        id: 1,
        name: "João Pedro S. Indicatti",
        img: "/img/colaborates/indicatti.jpg",
        age: "23",
        role: "Desenvolvedor",
        skills: [
            <IconBrandReact width={18} />,
            <IconBrandTailwind width={18} />,
            <IconBrandNextjs width={18} />,
            <IconBrandNodejs width={18} />,
            <IconBrandPrisma width={18} />,
            <IconBrandAws width={18} />,
            <IconBrandGithub width={18}/>
          ],
        theme: "neon_blue"
    },
    {
        id: 2,
        name: "Eduardo Subtil de Andrade",
        img: "/img/colaborates/subtil.jpg",
        age: "23",
        role: "Designer",
        skills: [
            <IconBrandAdobe width={18}/>,
            <IconBrandPatreon width={18}/>,
            <IconBrush width={18}/>,
            <IconPhoto width={18}/>,
        ],
        theme: "neon_red"
    }

]

export default colaborates_array;
