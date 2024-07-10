"use client";

import { useState, useRef, useEffect } from "react";
import {
    IconAffiliate,
    IconCaretRight,
    IconMenuDeep,
    IconPalette,
    IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PageControllers } from "@/data/json/pageControllers";
import { Button } from "../utils/Button";

export default function RootHeader() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [barPosition, setBarPosition] = useState<{
        left: number;
        width: number;
    }>({ left: 0, width: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [dropdown, setDropdown] = useState<boolean>(false);

    const handleItemClick = (itemName: string, itemRef: HTMLDivElement) => {
        setSelectedItem(itemName);
        updateBarPosition(itemRef);
    };

    const updateBarPosition = (itemRef: HTMLDivElement) => {
        const navElement = navRef.current;
        if (navElement && itemRef) {
            const navRect = navElement.getBoundingClientRect();
            const itemRect = itemRef.getBoundingClientRect();
            setBarPosition({
                left: itemRect.left - navRect.left,
                width: itemRect.width,
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={`fixed left-0  h-14 text-white z-[9999] w-full flex justify-center transition-all duration-300  ${
                isScrolled || dropdown ? "bg-neon_purple shadow-lg top-0" : "top-5 "
            }`}
        >
            <nav
                ref={navRef}
                className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] items-center justify-between max-lg:w-[95%] z-[9999]"
            >
                {/* <HeaderSearch /> */}
                <HeaderLogo/>
                <div className="flex items-center justify-center gap-5">
                    <div className="max-md:hidden">
                        <Button.Wide wide="md" rounded="full" variant="default">
                            <a href="#captation"><Button.Text text="Contratar"/></a>
                        </Button.Wide>
                    </div>
                    {PageControllers.map((item, index) => {
                        return (
                            <HeaderItem
                                key={`item-` + index}
                                itemName={item.exhibition}
                                isSelected={selectedItem === item.exhibition}
                                onClick={handleItemClick}
                                url={item.url}
                            />
                        );
                    })}
                    <div className="max-md:hidden">
                        <IconAffiliate />
                    </div>
                    {/* <HeaderColorSet/> */}
                </div>
                <AnimatePresence>
                    <motion.div
                        onClick={() => setDropdown(!dropdown)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`absolute h-10 w-10 right-0 rounded-md cursor-pointer hidden max-md:flex justify-center items-center z-[10000] text-zinc-400`}
                    >
                        {dropdown ? (
                            <motion.div
                                key="icon-caret-up"
                                initial={{ x: 100 }}
                                animate={dropdown && { x: 0 }}
                                exit={{ x: 100 }}
                                className=""
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                }}
                            >
                                <IconCaretRight width={30} height={30} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="icon-menu-deep"
                                initial={{ x: 100 }}
                                animate={!dropdown && { x: 0 }}
                                exit={{ x: 100 }}
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                }}
                            >
                                <IconMenuDeep width={30} height={30} />
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
                <motion.div
                    className={`absolute bottom-0 h-[3px] bg-white transition-all duration-300 z-[9997]`}
                    style={{ left: barPosition.left, width: barPosition.width }}
                />
            </nav>
            {/* <motion.div
        className={`absolute rounded-md transition-all  w-full max-w-[1080px] h-full max-lg:w-[95%] z-[9997] ${
          dropdown ? "bg-black" : "bg-transparent"
        }`}
      /> */}

            <AnimatePresence>
                {dropdown && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{ bounce: true }}
                        className={`absolute text-white top-0 right-0 w-full h-screen max-w-[1080px] hidden flex-col pt-14 max-lg:flex z-[9997] `}
                    >
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                                className="h-14 px-6 flex items-center w-full _text font-bold z-[9997] "
                            >
                                <div className="">...E ai! Bem vindo</div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                                className="w-full flex flex-wrap gap-3 z-[9997] p-5 "
                            >
                                {PageControllers.map((item, index) => {
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.1 }}
                                            key={`dropdown-exhibition-` + index}
                                            className="relative flex  h-12 justify-center items-center border border-dark  rounded-full bg-dark _text px-2"
                                            onClick={() => setDropdown(false)}
                                        >
                                            <motion.div
                                                className={` text-zinc-400  lowercase   z-[9999] flex gap-3 items-center
                                ${isScrolled ? "" : ""}
                                `}
                                            >
                                                #{item.exhibition}
                                            </motion.div>
                                            {/* <motion.div
                                key={`neon-`+index}
                                className={`absolute bottom-0 left-0 h-full w-full rounded z-[9998]
                                    ${getColor(item.theme)}
                                `}>

                                </motion.div> */}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            <motion.div
                                className={`absolute top-0 left-0  w-full transition-all h-full bg-neon_purple`}
                            ></motion.div>
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    x: { type: "spring", stiffness: 600, damping: 50 },
                }}
                className={`${
                    !dropdown ? "hidden" : "flex"
                } fixed top-0 left-0 bg-transparent h-full w-full z-[9000]`}
                onClick={() => setDropdown(false)}
            ></motion.div>
        </motion.header>
    );
}

interface ItemProps {
    itemName: string;
    isSelected: boolean;
    onClick: (itemName: string, itemRef: HTMLDivElement) => void;
    url: string
}

function HeaderItem({ itemName, isSelected, onClick, url }: ItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (itemRef.current) {
            onClick(itemName, itemRef.current);
        }
    };

    return (
        <div
            ref={itemRef}
            onClick={handleClick}
            className={`cursor-pointer _text text-nowrap mr-3 max-lg:hidden ${
                isSelected ? "text-white" : "text-zinc-300 hover:text-white"}`}
        >
            <a href={`#${url}`}>{itemName}</a>
        </div>
    );
}

function HeaderSearch() {
    const [isActive, setActive] = useState<boolean>(false);

    return (
        <div className="w-full h-full flex gap-3 items-center justify-start">
            {/* <Image width={90} height={90} alt="" src={`/video/anim_default.gif`} /> */}
            <div
                className="p-3 cursor-pointer"
                onClick={() => setActive(!isActive)}
            >
                <IconSearch />
            </div>
            {isActive && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 280 }}
                    exit={{ width: 0 }}
                    transition={{
                        x: { type: "spring", stiffness: 600, damping: 50 },
                    }}
                    className="bg-dark relative overflow-hidden rounded-md"
                >
                    <input
                        type="text"
                        placeholder="Buscar"
                        autoFocus
                        className="w-full bg-dark h-9 px-3"
                    />
                </motion.div>
            )}
        </div>
    );
}


function HeaderLogo() {
    return (
        <div className="rotate-[135deg]">
            <Image draggable={false} alt="" src={`icons/logo.svg`} width={30} height={30}/>
        </div>
    )
}
