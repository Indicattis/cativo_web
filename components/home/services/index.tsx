import { IconBrandAws, IconBrandNextjs, IconBrandNodejs, IconBrandPrisma, IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";





export default function ServicesComponent() {
    return (
        <div className=" w-full flex flex-col justify-center items-center">
        <div className=" bg-dark h-16 w-full flex justify-center"> 
            <div className="p-5"><IconBrandReact></IconBrandReact></div>
            <div className="p-5"><IconBrandTailwind></IconBrandTailwind></div>
            <div className="p-5"><IconBrandNextjs></IconBrandNextjs></div>
            <div className="p-5"><IconBrandNodejs></IconBrandNodejs></div>
            <div className="p-5"><IconBrandPrisma></IconBrandPrisma></div>
            <div className="p-5"><IconBrandAws></IconBrandAws></div>
        </div>
    </div>
    )
}