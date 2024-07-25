"use client";

import { useState, useRef, useEffect } from "react";
import {
    IconAffiliate,
    IconBook,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconCaretRight,
    IconMenuDeep,
    IconPalette,
    IconPointFilled,
    IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PageControllers } from "@/data/json/pageControllers";
import { Button } from "../utils/Button";
import { Link, Outlet } from "react-router-dom";
import BreadCrumbs from "./Breadcrumb/BreadCrumb";
import DisplayText from "./DisplayText/DisplayText";

export default function RootHeader() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [barPosition, setBarPosition] = useState<{
        left: number;
        width: number;
    }>({ left: 0, width: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const [pathArray, setPathArray] = useState<string[]>([]);
    const [ displayContent, changeDisplayContent] = useState<boolean>(false)
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
          const newArray = window.location.pathname.substring(1).split('/');
          setPathArray(newArray);
        }
      }, []);

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


    useEffect(() => {
        // Configura um intervalo que alterna o estado a cada 5 segundos
        const interval = setInterval(() => {
          changeDisplayContent((prev) => !prev);
        }, 5000);
    
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
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
                <div className="flex items-center">
                    <HeaderLogo/>
                    <DisplayText isActive={!displayContent} text="Web Developer"/>
                    <BreadCrumbs itens={pathArray} isActive={displayContent}/>
                </div>
                <div className="flex items-center justify-center gap-5 max-lg:hidden ">
                    {PageControllers.map((item, index) => {
                        return (
                            <HeaderItem
                                key={`item-` + index}
                                itemName={item.exhibition}
                                isSelected={selectedItem === item.exhibition}
                                onMouseOver={handleItemClick}
                                url={item.url}
                            />
                        );
                    })}
                    <span><IconPointFilled width={10}/></span>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "mailto:joao.indicatti@outlook.com?subject=Contato"}>
                        <IconBrandGmail width={18}/>
                    </div>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                        <IconBrandLinkedin width={18}/>
                    </div>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "https://github.com/Indicattis"}>
                        <IconBrandGithub width={18}/>
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div
                        onClick={() => setDropdown(!dropdown)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`absolute h-10 w-10 right-0 rounded-md cursor-pointer hidden max-lg:flex justify-center items-center z-[10000] text-zinc-400`}
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
                    className={`absolute bottom-0 h-[1px] bg-white transition-all duration-300 z-[9997]`}
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
                                            className="relative border rounded-full border-palette_gray"
                                            onClick={() => {setDropdown(false)}}
                                        >
                                            <Button.Wide rounded="full" wide="lg" variant="disabled">
                                                <a href={`#${item.url}`}><Button.Text text={item.exhibition}/></a>
                                            </Button.Wide>
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
                                className={`absolute top-0 left-0  w-full transition-all h-full bg-purple`}
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
    onMouseOver: (itemName: string, itemRef: HTMLDivElement) => void;
    url: string
}

function HeaderItem({ itemName, isSelected, onMouseOver, url }: ItemProps) {
    const itemRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (itemRef.current) {
            onMouseOver(itemName, itemRef.current);
        }
    };

    return (
        <div
            ref={itemRef}
            onMouseOver={handleClick}
            onClick={() => window.location.href = url}
            className={`cursor-pointer _text _small text-nowrap mr-3 max-lg:hidden ${
                isSelected ? "text-white" : "text-zinc-300 hover:text-white"}`}
        >
            {itemName}
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
        <div className="cursor-pointer rotate-[135deg] px-3" onClick={() => window.location.href = "/"}>
            <IconBook></IconBook>
        </div>
    )
}

