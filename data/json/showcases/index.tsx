import { Content } from "@/components/Home/Showcase/Contents";
import { ShowcaseDTO } from "@/data/types/showcase";

const Showcases: ShowcaseDTO[] = [
    {
        id: 1,
        title: "Carreira",
        text: `Iniciei meus estudos em 2014 quando ganhei meu primeiro computador, o que me abriu portas para conhecer o mundo da tecnologia e informação. Logo me matriculei no curso técnico e me especializei profissionalmente na área, isso me possibilitou conseguir minha primeira oportunidade profissional onde atuei por 5 anos e 5 meses (exatamente). Faço Bacharel em Ciências da Computação e sigo meus estudos no dia-a-dia para evoluir cada vez mais na área do desenvolvimento.`,
        tags: ["evolução", "adacêmico", "estudos", "formação"],
        url: "/img/showcase/habilidades.png",
        content: <Content.Career/> 
    },
    {
        id: 2,
        title: "Habilidades",
        text: `Sou especializado no desenvolvimento de sites, minha comunicação e vontade debater sobre melhores soluções são meus principais pontos fortes, acredito que são essenciais para uma aprendizagem rápida e ao mesmo tempo para entregas mais performáticas. Apaixonado por explorar minhas capacidades criativas no design de interfaces e construção das funcionalidades de uma aplicação. Estou sempre buscando pelo escalável e prático :D.`,
        tags: ["comunicação", "vontade", "criatividade", "escalabilidade", "praticidade"],
        url: "/img/showcase/interfaces-filled.png",
        content: <Content.Skills/>
    },
    {
        id: 3,
        title: "Linguagens de programação",
        text: `Meu primeiro contato com uma linguagem de programação foi no desenvolvimento de um Robô de assinatura digital em Python, isso me motivou a explorar e começar minhas primeiras aplicações voltadas para web utilizando Javascript para Frontend e PHP para Backend. Com o passar do tempo comecei a estudar Node, Reactjs e typescript, tecnologias que utilizo até hoje (inclusive na construção deste website). Hoje em dia faço uso de inumeras ferramentas para o desenvolvimento contando com frameworks, libs e ORMs.`,
        tags: ["javascript", "typescript", "reactjs", "node", "php", "python", "mysql", "restful", "api"],
        url: "/img/showcase/acessibilidade.png",
        content: <Content.ProgrammingLanguages/>
    },
    {
        id: 4,
        title: "Conhecimentos",
        text: `Tenho conhecimento de construção de interfaces, hidratação de cores e animações, organização de layout, construção e integração de API's com chamadas RESTFUL, e construção e administração de banco de dados relacionais. Entendo conceitos de CI/CD papelines, DevOps, Repos e pair programming. De tempo em tempo me desafiei a aprender, o que se tornou habito. `,
        tags: ["adobe", "figma", "frontend"],
        url: "/img/showcase/mobile.jpg",
        content: <Content.Knowledge/>
    },
    {
        id: 5,
        title: "Organização",
        text: `Busco sempre uma organização limpa, de forma a tornar o código tão performático quanto prático de acrescentar e alterar sessões. Utilizo diversas ferramentas com funcionalidades como versionamento de código, patterns de codificação e organização de processos CI/CD.`,
        tags: ["git", "docker", "jenkins", "arquitetura hexagonal", "patterns de codificações", "ci/cd papelines"],
        url: "/img/showcase/arquitetura.png",
        content: <Content.Motivation/>
    }
];

export { Showcases };
