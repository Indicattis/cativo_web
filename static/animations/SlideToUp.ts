



export const SlideToUp = {
    start: { 
        y: 50,
        opacity: 0,
        transition: {
            type: "spring",
            ease: "easeInOut",
            stiffness: 120,
            damping: 17
        }, },
    middle: { 
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            ease: "easeInOut",
            stiffness: 170,
            damping: 19
        },
     },
    end: {
        y: -50,
        opacity: 0,
        transition: {
            type: "spring",
            ease: "easeInOut",
            stiffness: 120,
            damping: 17
        },
    },
};