import { UNSPLASH_LINK } from "../config";


const visual_serv_array: VisualServiceDTO[] = [
    {
        id: 1,
        exhibition: "Rebranding",
        theme: "neon_purple",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?rebranding`,
    },
    {
        id: 2,
        exhibition: "Cartão de visita",
        theme: "neon_red",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?card`,
    },
    {
        id: 3,
        exhibition: "Logomarca",
        theme: "neon_blue",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?landing_page`,
    },
    {
        id: 4, // Note: corrected the duplicate id
        exhibition: "Banner",
        theme: "neon_pink",
        url: `/img/design/banner_2.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?banner`,
    },
    {
        id: 5, // Note: corrected the duplicate id
        exhibition: "Post",
        theme: "neon_green2",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?smartphone`,
    },
    {
        id: 6, // Note: corrected the duplicate id
        exhibition: "Outfit",
        theme: "neon_green",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?smartphone`,
    }
]

export default visual_serv_array;
