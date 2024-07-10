import { ShowcaseDTO } from "@/data/types/showcase"


const Showcases: ShowcaseDTO[] = [
        {
            id: 1,
            title: "Habilidades",
            text: `As aplicações desenvolvidas contam com funcionalidades reativas e páginas dinâmicas. As tecnologias para desenvolvimento de interfaces são React, Typescript e tailwind CSS bem como HTML5, javascript e CSS/SCSS.`,
            url: "/img/showcase/habilidades.png",
        },
        {
            id: 2,
            title: "Organização",
            text: `Com a arquitetura hexagonal é possível paralelizar serviços e tornar o código escalável e de prática manutenção. Ao utlizar em conjunto com pattern de composição essa stack pode se tornar uma das mais ágeis do mercado.`,
            url: "/img/showcase/setup-template.jpg",
        },
        {
            id: 3,
            title: "Pair Programming",
            text: `Experimente as melhores cores, imagens e animações para o seu layout.`, 
            url: "/img/showcase/interface.png",
        },
        {
            id: 4,
            title: "DevOps",
            text: `O Build e deploy de uma interface de forma ágil tanto para testes quanto para produção. Com as ferramentas da AWS como RDS e EC2 para publicar uma aplicação em produção ou até ferramentas da vercel para homologação.`,
            url: "/img/showcase/arquitetura-template.jpg",
        }, 
        {
            id: 5,
            title: "Acessibilidade",
            text: `Programas 100% responsivos, ou seja, seus layouts são adaptáveis para todas as dimensões de telas mantendo toda a qualidade e praticidade do seu uso.`,
            url: "/img/showcase/Acessibilidade.png",
        },
        {
            id: 6,
            title: "Confiabilidade",
            text: `Segurança e estabilidade nas tecnologias de desenvolvimento mais atualizadas do mercado.`,
            url: "/img/showcase/Acessibilidade.png",
        }

]

export {Showcases}