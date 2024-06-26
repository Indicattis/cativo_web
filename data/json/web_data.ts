import { UNSPLASH_LINK } from "../config";


const web_data_array: WebDataDTO[] = [
    {
        id: 1,
        exhibition: "Portifólio - 1",
        url: `/img/project/web_portifolio_template_desktop.png`,
        theme: "neon_purple",
        subimages: [
            `/img/project/web_portifolio_template_mobile_01.png`,
            `/img/project/web_portifolio_template_mobile_01.png`,
            `/img/project/web_portifolio_template_mobile_01.png`,
            `/img/project/web_portifolio_template_mobile_01.png`,
            `/img/project/web_portifolio_template_mobile_01.png`,
        ],
        service_id: 1
    },
    {
        id: 2,
        exhibition: "Blog - 1",
        url: `/img/project/web_blog_template_desktop.jpg`,
        theme: "neon_red",
        subimages: [
            `/img/project/web_blog_template_desktop.jpg`,
            `/img/project/web_blog_template_desktop.jpg`,
            `/img/project/web_blog_template_desktop.jpg`
        ],
        service_id: 2
    },
    {
        id: 3,
        exhibition: "Landing Page - 1",
        url: `/img/project/landing_page_template.png`,
        theme: "neon_pink",
        subimages: [
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
        ],
        service_id: 3
    },
    {
        id: 4, // Note: corrected the duplicate id
        exhibition: "Negócios - 1",
        url: `${UNSPLASH_LINK}/1200x1200?tree`,
        theme: "neon_red",
        subimages: [
            `${UNSPLASH_LINK}/350x800?tree`,
            `${UNSPLASH_LINK}/350x800?tree`,
            `${UNSPLASH_LINK}/350x800?tree`
        ],
        service_id: 1
    },
    {
        id: 6, // Note: corrected the duplicate id
        exhibition: "Barber Shop",
        url: `/img/project/04-thelordbarber/1.jpg`,
        theme: "neon_blue",
        subimages: [
            `/img/project/04-thelordbarber/2.jpg`,
            `/img/project/04-thelordbarber/3.jpg`,
        ],
        service_id: 4
    },
    {
        id: 5, // Note: corrected the duplicate id
        exhibition: "teste",
        url: `/img/project/web_landingpage_template_desktop.jpg`,
        theme: "neon_blue",
        subimages: [
            `/img/project/web_landingpage_template_desktop.jpg`,
            `/img/project/web_landingpage_template_desktop.jpg`,
            `/img/project/web_landingpage_template_desktop.jpg`
        ],
        service_id: 5
    },
    {
        id: 4, // Note: corrected the duplicate id
        exhibition: "E-commerce",
        url: `/img/project/web_business_template_desktop.jpg`,
        theme: "neon_blue",
        subimages: [
            `/img/project/web_business_template_desktop.jpg`,
            `/img/project/web_business_template_desktop.jpg`,
            `/img/project/web_business_template_desktop.jpg`
        ],
        service_id: 4
    }
]

export default web_data_array;
