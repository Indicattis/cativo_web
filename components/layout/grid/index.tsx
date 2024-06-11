import Image from "next/image";



interface GridProps {
    children: any | any[];
    cols: number
    rows: number
}

export default function GridComponent({ children, cols, rows }: GridProps) {
    return (
        <div className={`h-full w-full grid grid-flow-row-dense max-lg:flex flex-col
        ${cols == 1 ? "grid-cols-1" : ""} 
        ${cols == 2 ? "grid-cols-2" : ""} 
        ${cols == 3 ? "grid-cols-3" : ""} 
        ${rows == 1 ? "grid-rows-1" : ""} 
        ${rows == 2 ? "grid-rows-2" : ""} 
        ${rows == 3 ? "grid-rows-3" : ""} 
        `}>
            {children}
        </div>
    )
}


interface CardProps {
    children: any | any[];
    col: number
    row: number
}

export function GridElement({children, col, row}:CardProps) {
    return (
        <div className={`border border-dark
        ${col == 1 ? "col-span-1" : ""} 
        ${col == 2 ? "col-span-2" : ""} 
        ${col == 3 ? "col-span-3" : ""} 
        ${row == 1 ? "row-span-1" : ""} 
        ${row == 2 ? "row-span-2" : ""} 
        ${row == 3 ? "row-span-3" : ""} 
        
        `}>
            {children}
        </div>
    )
}