



function getColor(color: string | undefined) {

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
        case "gray":
            return `bg-gray` 
            break;
        case "black":
            return `bg-black` 
            break;
        case "dark":
            return `bg-dark` 
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
            return `text-neon_red` 
            break;
        case "neon_purple":
            return `text-neon_purple` 
            break;
        case "neon_blue":
            return `text-neon_blue` 
            break;
        case "neon_pink":
            return `text-neon_pink2` 
            break;
        case "gray":
            return `text-dark` 
            break;
        case "dark":
            return `text-dark`
            break
        case "black":
            return `text-black` 
            break;
        default:
            return `text-white`
            break
    }
}


function getShadow(color: string | undefined) {

    switch (color) {
        case "neon_green":
            return `shadow-neon_green2` 
            break;
        case "neon_red":
            return `shadow-neon_red` 
            break;
        case "neon_purple":
            return `shadow-neon_purple` 
            break;
        case "neon_blue":
            return `shadow-neon_blue` 
            break;
        case "neon_pink":
            return `shadow-neon_pink2` 
            break;
        default:
            return `shadow-dark`
            break;
    }
}


function getBottomGradient(color: string | undefined) {

    switch (color) {
        case "neon_green":
            return `bg-gradient-to-b from-neon_green2 from-10% via-10% to-80%` 
            break;
        case "neon_red":
            return `bg-gradient-to-b from-neon_red from-10% via-10% to-80%` 
            break;
        case "neon_purple":
            return `bg-gradient-to-b from-neon_purple from-10% via-10% to-80%` 
            break;
        case "neon_blue":
            return `bg-gradient-to-b from-neon_blue from-10% via-10% to-80%` 
            break;
        case "neon_pink":
            return `bg-gradient-to-b from-neon_pink2 from-10% via-10% to-80%` 
            break;
        case "gray":
            return `bg-gray` 
            break;
        case "black":
            return `bg-black` 
            break;
        default:
            break;
    }
}
function getTopGradient(color: string | undefined) {

    switch (color) {
        case "neon_green":
            return `bg-gradient-to-t from-neon_green2 from-10% via-10% to-80%` 
            break;
        case "neon_red":
            return `bg-gradient-to-t from-neon_red from-10% via-10% to-80%` 
            break;
        case "neon_purple":
            return `bg-gradient-to-t from-neon_purple from-10% via-10% to-80%` 
            break;
        case "neon_blue":
            return `bg-gradient-to-t from-neon_blue from-10% via-10% to-80%` 
            break;
        case "neon_pink":
            return `bg-gradient-to-t from-neon_pink2 from-10% via-10% to-80%` 
            break;
        case "gray":
            return `bg-gray` 
            break;
        case "black":
            return `bg-black` 
            break;
        default:
            break;
    }
}

function getRadiusGradient(color: string | undefined) {

    switch (color) {
        case "neon_green":
            return `bg-gradient-radial  from-neon_green2 from-10% via-10% to-70%` 
            break;
        case "neon_red":
            return `bg-gradient-radial from-neon_red from-10% via-10% to-70%` 
            break;
        case "neon_purple":
            return `bg-gradient-radial from-neon_purple from-10% via-10% to-70%` 
            break;
        case "neon_blue":
            return `bg-gradient-radial from-neon_blue from-10% via-10% to-70%` 
            break;
        case "neon_pink":
            return `bg-gradient-radial from-neon_pink2 from-10% via-10% to-70%` 
            break;
        case "gray":
            return `bg-gradient-radial ` 
            break;
        case "black":
            return `bg-black` 
            break;
        default:
            break;
    }
}

function ConvertRGB(color: string | undefined) {

    switch (color) {
        case "#68fe9a":
            return `neon_green` 
            break;
        case "#ff0066":
            return `neon_red` 
            break;
        case "#5005f2":
            return `neon_purple` 
            break;
        case "#f5618b":
            return `neon_pink` 
            break;
        case "#407cf3":
            return `neon_blue` 
            break;
        default:
            return `neon_red` 
            break;
    }
}
export { getColor, getTextColor, getShadow, getBottomGradient, getTopGradient, getRadiusGradient, ConvertRGB}