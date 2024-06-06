import { UNSPLASH_LINK } from "../config";


const web_serv_array: WebServiceDTO[] = [
    {
        id: 1,
        exhibition: "Portifólio",
        theme: "neon_purple",
        url: `/img/project/web_portifolio_template_desktop.png`,
        logo: `/img/project/web_portifolio_template_desktop.png`, // AQUI É EXIBIDO WEB MARKET
    },
    {
        id: 2,
        exhibition: "Blog",
        theme: "neon_red",
        url: `/img/project/web_blog_template_desktop.jpg`,
        logo: `/img/project/web_blog_template_desktop.jpg`,
    },
    {
        id: 3,
        exhibition: "Landing Page",
        theme: "neon_blue",
        url: `/img/project/landing_page_template.png`,
        logo: `/img/project/landing_page_template.png`,
    },
    {
        id: 4, // Note: corrected the duplicate id
        exhibition: "Agendamento online",
        theme: "neon_pink",
        url: `/img/project/web_business_template_desktop.jpg`,
        logo: `/img/project/web_business_template_desktop.jpg`,
    },
    {
        id: 5, // Note: corrected the duplicate id
        exhibition: "Ecommerce",
        theme: "neon_green",
        url: `/img/project/web_business_template_desktop.jpg`,
        logo: `/img/project/web_business_template_desktop.jpg`,
    }
]

export default web_serv_array;
