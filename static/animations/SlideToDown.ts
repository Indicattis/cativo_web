





export const SlideToDown = {
    start: { 
        y: -200,
        opacity: 0,
        transition: {
            delay: .5,
            type: "spring",
            ease: "easeInOut",
            damping: 30
        }, },
    middle: { 
        y: 0,
        opacity: 1,
        transition: {
            delay: .5,
            type: "spring",
            ease: "easeInOut",
            damping: 30
        },
     },
    end: {
        y: 200,
        opacity: 0,
        transition: {
            delay: .5,
            type: "spring",
            ease: "easeInOut",
            damping: 30
        },
    },
};