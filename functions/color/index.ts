
function getColorRGB(variant: string | undefined) {

    switch (variant) {
        case "default":
            return `rgb(80 5 242)`
            break;
        case "purple":
            return `linear-gradient(90deg, rgba(80,5,242,1) 37%, rgba(215,5,242,1) 100%)`
            break;
        case "red":
            return `rgb(255 0 102)`
            break;
        case "green":
            return `rgb(104 254 154)`
            break;
        case "blue":
            return `rgb(64 124 243)`
            break;
        case "gray":
            return `rgb(161 161 170)`
            break;
        case "black":
            return `rgb(0 0 0)`
            break;
        case "disabled":
            return `rgb(21 28 54)`
            break;
        default:
            break;
    }
}

export {getColorRGB}