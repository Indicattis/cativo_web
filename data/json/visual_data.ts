import { UNSPLASH_LINK } from "../config";


const visual_data_array: VisualDataDTO[] = [
    {
        id: 1,
        exhibition: "Rebranding",
        url: `/img/design/banner.jpg`,
        subimages: [
            `/img/design/rebranding_example_01.jpg`,
            `/img/design/rebranding_example_02.png`,
            `/img/design/rebranding_example_03.png`,
            `/img/design/rebranding_example_04.png`,
            `/img/design/rebranding_example_05.png`,
            `/img/design/rebranding_example_06.png`,
        ],
        service_id: 1
    },
    {
        id: 2,
        exhibition: "Cartão de visita - SC",
        url: "",
        subimages: [
            `/img/design/card_example_01.jpg`,
            `/img/design/card_example_02.jpg`,
            `/img/design/card_example_03.jpg`,
            `/img/design/card_example_01.jpg`,
            `/img/design/card_example_02.jpg`,
        ],
        service_id: 2
    },
    {
        id: 3,
        exhibition: "Cartão de visita",
        subimages: [
            `/img/design/card_example_04.jpg`,
            `/img/design/card_example_04.jpg`,
            `/img/design/card_example_04.jpg`,
        ],
        service_id: 2
    },
    {
        id: 4,
        exhibition: "Logomarca",
        subimages: [
            `/img/design/logo_example_01.jpg`,
            `/img/design/logo_example_02.jpg`,
            `/img/design/logo_example_03.jpg`,
            `/img/design/logo_example_01.jpg`,
            `/img/design/logo_example_02.jpg`,
            `/img/design/logo_example_03.jpg`,
        ],
        service_id: 3
    },
    {
        id: 5, // Note: corrected the duplicate id
        exhibition: "Banner",
        subimages: [
            `/img/design/banner_example_04.jpg`,
            `/img/design/banner_example_04.jpg`,
            `/img/design/banner_example_04.jpg`,
            `/img/design/banner_example_04.jpg`,
        ],
        service_id: 4
    },
    {
        id: 6, // Note: corrected the duplicate id
        exhibition: "Post",
        subimages: [
            `/img/design/post_example_01.jpg`,
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_03.jpg`,
            `/img/design/post_example_01.jpg`,
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_03.jpg`,
        ],
        service_id: 5
    },
    {
        id: 7, // Note: corrected the duplicate id
        exhibition: "Outfit SC",
        subimages: [
            `/img/design/outfit_example_01.jpg`,
            `/img/design/outfit_example_02.jpg`,
            `/img/design/outfit_example_03.jpg`,
            `/img/design/outfit_example_01.jpg`,
        ],
        service_id: 6
    },
    {
        id: 8, // Note: corrected the duplicate id
        exhibition: "Post",
        subimages: [
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_02.jpg`,
            `/img/design/post_example_03.jpg`,
            `/img/design/post_example_02.jpg`,
        ],
        service_id: 5
    },
    {
        id: 9, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/outfit_example_01.jpg`,
            `/img/design/outfit_example_02.jpg`,
            `/img/design/outfit_example_03.jpg`,
            `/img/design/outfit_example_01.jpg`,
        ],
        service_id: 6
    },
    {
        id: 10, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_05.jpg`,
            `/img/design/card_example_05.jpg`,
            `/img/design/card_example_05.jpg`,
            `/img/design/card_example_05.jpg`,
        ],
        service_id: 2
    },
    {
        id: 11, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_06.jpg`,
            `/img/design/card_example_06.jpg`,
            `/img/design/card_example_06.jpg`,
            `/img/design/card_example_06.jpg`,
        ],
        service_id: 2
    },
    {
        id: 12, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_07.jpg`,
            `/img/design/card_example_07.jpg`,
            `/img/design/card_example_07.jpg`,
            `/img/design/card_example_07.jpg`,
        ],
        service_id: 2
    },
    {
        id: 13, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_08.jpg`,
            `/img/design/card_example_08.jpg`,
            `/img/design/card_example_08.jpg`,
            `/img/design/card_example_08.jpg`,
        ],
        service_id: 2
    },
    {
        id: 14, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 15, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 16, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 17, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 18, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 19, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 20, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 21, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 22, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 23, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 24, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 25, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 26, // Note: corrected the duplicate id
        exhibition: "Outfit SC - 2",
        subimages: [
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
            `/img/design/card_example_09.jpg`,
        ],
        service_id: 2
    },
    {
        id: 27, // Note: corrected the duplicate id
        exhibition: "Banner",
        subimages: [
            `/img/design/banner_example_01.jpg`,
            `/img/design/banner_example_01.jpg`,
            `/img/design/banner_example_01.jpg`,
            `/img/design/banner_example_01.jpg`,
        ],
        service_id: 4
    },
    {
        id: 28, // Note: corrected the duplicate id
        exhibition: "Banner",
        subimages: [
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_02.jpg`,
            `/img/design/banner_example_02.jpg`,
        ],
        service_id: 4
    },
    {
        id: 28, // Note: corrected the duplicate id
        exhibition: "Banner",
        subimages: [
            `/img/design/banner_example_03.jpg`,
            `/img/design/banner_example_03.jpg`,
            `/img/design/banner_example_03.jpg`,
            `/img/design/banner_example_03.jpg`,
        ],
        service_id: 4
    },
]

export default visual_data_array;
