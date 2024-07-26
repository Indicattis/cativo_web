"use client"

import { IconArrowBadgeRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Slide } from "@/static/animations";

interface BreadCrumbsProps {
    itens: string[]
    isActive: boolean
}

export default function BreadCrumbs({ itens, isActive }: BreadCrumbsProps) {
    const [isRoot, setIsRoot] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            setIsRoot(path === '/' || path === '');
        }
    }, []);
    return (
        isActive && (
            <AnimatePresence>

                <motion.div
                    key={`breadcrumbs-content`}
                    variants={Slide.ToUp}
                    initial={"start"}
                    animate={"middle"}
                    exit={"end"} 
                    className="cursor-pointer _text _small">
                    <ul className=" flex text-palette_gray items-center gap-2">
                        <div className=" flex gap-2 items-center">
                            <p className={`
                    ${isRoot ? "text-white" : ""}
                        hover:text-white cursor-pointer rounded-md
                        `} onClick={() => window.location.href = "/"}>Home</p>

                            {!isRoot && (
                                <span>
                                    <IconArrowBadgeRight width={20} />
                                </span>
                            )}
                        </div>
                        {
                            itens.map((item, index) => {
                                return (
                                    <div key={`breadcrumb-` + item} className=" flex gap-2 items-center">
                                        <p className={`
                                    ${index == itens.length - 1 ? "text-white cursor-default pointer-events-none" : " cursor-pointer"}
                                    hover:text-white rounded-md capitalize`}>{item}</p>
                                        {index == itens.length - 1 ? "" : (
                                            <span><IconArrowBadgeRight width={20} /></span>
                                        )}
                                    </div>
                                )
                            })
                        }
                    </ul>
                </motion.div>
            </AnimatePresence>
        )

    )
}