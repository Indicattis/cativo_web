import { UNSPLASH_LINK } from "../config";


const projects_array: ProjectDTO[] = [
    {
        id: 1,
        theme: "neon_green2",
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
        theme: "neon_red",
        url: `${UNSPLASH_LINK}/1200x1200?barber`,
        logo: `${UNSPLASH_LINK}/200x120?barber`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?barber`,
            `${UNSPLASH_LINK}/350x800?barber`,
            `${UNSPLASH_LINK}/350x800?barber`
        ]
    },
    {
        id: 3,
        theme: "neon_green",
        url: `${UNSPLASH_LINK}/1200x1200?inc`,
        logo: `${UNSPLASH_LINK}/200x120?inc`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?inc`,
            `${UNSPLASH_LINK}/350x800?inc`,
            `${UNSPLASH_LINK}/350x800?inc`
        ]
    },
    {
        id: 4,
        theme: "neon_purple",
        url: `${UNSPLASH_LINK}/1200x1200?book`,
        logo: `${UNSPLASH_LINK}/200x120?book`,
        subimages: [
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
            `${UNSPLASH_LINK}/350x800?book`,
        ]
    },
    {
        id: 5, // Note: corrected the duplicate id
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
