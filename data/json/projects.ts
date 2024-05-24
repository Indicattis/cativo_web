import { UNSPLASH_LINK } from "../config";


const projects_array: ProjectDTO[] = [
    {
        id: 1,
        theme: "neon_green",
        url: "https://dressys-web.vercel.app/access",
        logo: `${UNSPLASH_LINK}/200x120?beauty`
    },
    {
        id: 2,
        theme: "neon_red",
        url: "https://the-lord-barber-git-main-indicattis.vercel.app/",
        logo: `${UNSPLASH_LINK}/200x120?barber`
    },
    {
        id: 3,
        theme: "neon_blue",
        url: "https://incbook-web.vercel.app/",
        logo: `${UNSPLASH_LINK}/200x120?inc`
    },
    {
        id: 4,
        theme: "neon_purple",
        url: "https://incbook-web.vercel.app/",
        logo: `${UNSPLASH_LINK}/200x120?book`
    }
]

export default projects_array;