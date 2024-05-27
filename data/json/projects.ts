import { UNSPLASH_LINK } from "../config";


const projects_array: ProjectDTO[] = [
    {
        id: 1,
        name: "Portifólio",
        theme: "neon_purple",
        url: `${UNSPLASH_LINK}/1200x1200?beauty`,
        logo: `${UNSPLASH_LINK}/200x120?beauty`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?beauty`,
            `${UNSPLASH_LINK}/350x800?beauty`,
            `${UNSPLASH_LINK}/350x800?beauty`
        ]
    },
    {
        id: 2,
        name: "Blog",
        theme: "neon_red",
        url: `${UNSPLASH_LINK}/1200x1200?inc`,
        logo: `${UNSPLASH_LINK}/200x120?inc`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?inc`,
            `${UNSPLASH_LINK}/350x800?inc`,
            `${UNSPLASH_LINK}/350x800?inc`
        ]
    },
    {
        id: 3,
        name: "Landing Page",
        theme: "neon_blue",
        url: `/img/project/landing_page_template.png`,
        logo: `${UNSPLASH_LINK}/200x120?book`,
        subimages: [
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
            `/img/project/landing_page_template.png`,
        ]
    },
    {
        id: 4, // Note: corrected the duplicate id
        name: "Negócios",
        theme: "neon_pink",
        url: `${UNSPLASH_LINK}/1200x1200?tree`,
        logo: `${UNSPLASH_LINK}/200x120?tree`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?tree`,
            `${UNSPLASH_LINK}/350x800?tree`,
            `${UNSPLASH_LINK}/350x800?tree`
        ]
    }
]

export default projects_array;
