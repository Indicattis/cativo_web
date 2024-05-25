import { UNSPLASH_LINK } from "../config";


const projects_array: ProjectDTO[] = [
    {
        id: 1,
        theme: "neon_green2",
        url: `${UNSPLASH_LINK}/1200x1120?beauty`,
        logo: `${UNSPLASH_LINK}/200x120?beauty`
    },
    {
        id: 2,
        theme: "neon_red",
        url: `${UNSPLASH_LINK}/1200x1120?barber`,
        logo: `${UNSPLASH_LINK}/200x120?barber`
    },
    {
        id: 3,
        theme: "neon_green",
        url: `${UNSPLASH_LINK}/1200x1120?inc`,
        logo: `${UNSPLASH_LINK}/200x120?inc`
    },
    {
        id: 4,
        theme: "neon_purple",
        url: `${UNSPLASH_LINK}/1200x1120?book`,
        logo: `${UNSPLASH_LINK}/200x120?book`
    },
    {
        id: 4,
        theme: "neon_pink",
        url: `${UNSPLASH_LINK}/1200x1120?tree`,
        logo: `${UNSPLASH_LINK}/200x120?tree`
    }
]

export default projects_array;