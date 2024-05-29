import { UNSPLASH_LINK } from "../config";


const designs_array: DesignDTO[] = [
    {
        id: 1,
        name: "Rebranding",
        theme: "neon_purple",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?rebranding`,
        subimages: [
            `/img/design/rebranding_example_01.jpg`,
            `/img/design/rebranding_example_02.png`,
            `/img/design/rebranding_example_03.png`,
            `/img/design/rebranding_example_04.png`,
            `/img/design/rebranding_example_05.png`,
            `/img/design/rebranding_example_06.png`,
        ]
    },
    {
        id: 2,
        name: "Cartão de visita",
        theme: "neon_red",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?card`,
        subimages: [
            `/img/design/card_example_04.jpg`,
            `/img/design/card_example_04.jpg`,
            `/img/design/card_example_04.jpg`,
        ]
    },
    {
        id: 3,
        name: "Logomarca",
        theme: "neon_blue",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?landing_page`,
        subimages: [
            `/img/design/logo_example_01.jpg`,
            `/img/design/logo_example_02.jpg`,
            `/img/design/logo_example_03.jpg`,
            `/img/design/logo_example_01.jpg`,
            `/img/design/logo_example_02.jpg`,
            `/img/design/logo_example_03.jpg`,
        ]
    },
    {
        id: 4, // Note: corrected the duplicate id
        name: "Banner",
        theme: "neon_pink",
        url: `/img/design/banner_2.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?banner`,
        subimages: [
            `/img/design/banner_example_04.jpg`,
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_03.jpg`,
            `/img/design/banner_example_04.jpg`,
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_01.jpg`,
        ]
    },
    {
        id: 5, // Note: corrected the duplicate id
        name: "Post",
        theme: "neon_green2",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?smartphone`,
        subimages: [
            `/img/design/post_example_01.jpg`,
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_03.jpg`,
            `/img/design/post_example_01.jpg`,
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_03.jpg`,
        ]
    },
    {
        id: 6, // Note: corrected the duplicate id
        name: "Outfit",
        theme: "neon_green",
        url: `/img/design/banner.jpg`,
        logo: `${UNSPLASH_LINK}/200x120?smartphone`,
        subimages: [
            `/img/design/outfit_example_01.jpg`,
            `/img/design/outfit_example_02.jpg`,
            `/img/design/outfit_example_03.jpg`,
            `/img/design/outfit_example_01.jpg`,
        ]
    }
]

export default designs_array;
