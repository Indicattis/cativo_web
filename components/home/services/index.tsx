import { IconBrandAws, IconBrandNextjs, IconBrandNodejs, IconBrandPrisma, IconBrandReact, IconBrandTailwind } from "@tabler/icons-react";


interface NamespaceProps {
    exhibition: string;
}


export default function NamespaceComponent({exhibition}: NamespaceProps) {
    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <div className=" bg-dark h-16 w-full flex justify-center text-xl items-center text-gray"> 
                <div className="p-5 max-lg:hidden"><IconBrandReact></IconBrandReact></div>
                <div className="p-5"><IconBrandTailwind></IconBrandTailwind></div>
                <div className="p-5"><IconBrandNextjs></IconBrandNextjs></div>
                <span className="text-white mt-1 text-nowrap">
                    {exhibition}
                </span>
                <div className="p-5"><IconBrandNodejs></IconBrandNodejs></div>
                <div className="p-5"><IconBrandPrisma></IconBrandPrisma></div>
                <div className="p-5 max-lg:hidden"><IconBrandAws></IconBrandAws></div>
            </div>
        </div>
    )
}