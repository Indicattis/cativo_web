import { UNSPLASH_LINK } from "../config";


const projects_array: ProjectDTO[] = [
    {
        id: 1,
        theme: "neon_green2",
        url: "",
        logo: `${UNSPLASH_LINK}/200x120?beauty`
    },
    {
        id: 2,
        theme: "neon_red",
        url: "/img/project/homepage-thelordbarber.png",
        logo: `${UNSPLASH_LINK}/200x120?barber`
    },
    {
        id: 3,
        theme: "neon_blue",
        url: "/img/project/homepage-incbook.png",
        logo: `${UNSPLASH_LINK}/200x120?inc`
    },
    {
        id: 4,
        theme: "neon_purple",
        url: "/img/project/homepage-william.jpg",
        logo: `${UNSPLASH_LINK}/200x120?book`
    }
]

export default projects_array;