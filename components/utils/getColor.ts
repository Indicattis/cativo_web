



function getColor(color: string) {

    switch (color) {
        case "neon_green":
            return `bg-gradient-to-tr from-neon_green2 to-neon_green` 
            break;
        case "neon_red":
            return `bg-gradient-to-tr from-neon_red to-neon_pink` 
            break;
        case "neon_purple":
            return `bg-gradient-to-tr from-neon_purple to-neon_blue` 
            break;
        case "neon_blue":
            return `bg-gradient-to-tr from-neon_blue to-neon_green` 
            break;
        case "neon_pink":
            return `bg-gradient-to-tr from-neon_pink2 to-neon_pink` 
            break;
        default:
            break;
    }
}


 function getTextColor(color: string) {

    switch (color) {
        case "neon_green":
            return `text-neon_green` 
            break;
        case "neon_red":
            return `text-neon_pink` 
            break;
        case "neon_purple":
            return `text-neon_blue` 
            break;
        case "neon_blue":
            return `text-neon_green` 
            break;
        case "neon_pink":
            return `text-neon_pink` 
            break;
        default:
            return `text-dark`
            break;
    }
}

export { getColor, getTextColor}