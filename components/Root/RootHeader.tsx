"use client";

import { useState, useRef, useEffect } from "react";
import {
    IconBook,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandLinkedin,
    IconCaretRight,
    IconMenuDeep,
    IconPointFilled,
    IconSearch,
} from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PageControllers } from "@/data/json/pageControllers";
import BreadCrumbs from "./Breadcrumb/BreadCrumb";
import DisplayText from "./DisplayText/DisplayText";
import { Images } from "@/static/imgs";

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
    const [displayContent, changeDisplayContent] = useState<boolean>(false)

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
            className={`fixed left-0  h-14 text-white z-[9999] w-full flex justify-center transition-all duration-300  ${isScrolled || dropdown ? "bg-neon_purple shadow-lg top-0" : "top-5 "
                }`}
        >
            <nav
                ref={navRef}
                className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] items-center justify-between max-lg:w-[95%] z-[9999]"
            >
                {/* <HeaderSearch /> */}
                <div className="flex items-center">
                    <HeaderLogo />
                    <DisplayText isActive={!displayContent} text="Web Developer" />
                    <BreadCrumbs itens={pathArray} isActive={displayContent} />
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
                    <span><IconPointFilled width={10} /></span>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "mailto:joao.indicatti@outlook.com?subject=Contato"}>
                        <IconBrandGmail width={18} />
                    </div>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                        <IconBrandLinkedin width={18} />
                    </div>
                    <div className="cursor-pointer hover:text-neon_purple" onClick={() => window.location.href = "https://github.com/Indicattis"}>
                        <IconBrandGithub width={18} />
                    </div>
                </div>
                <AnimatePresence>
                    <motion.div
                        onClick={() => setDropdown(!dropdown)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`absolute h-10 w-10 right-0 rounded-md cursor-pointer hidden max-lg:flex justify-center items-center`}
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
                        animate={{ width: "80%" }}
                        exit={{ width: 0 }}
                        transition={{ stiffness: 40, damping: 10 }}
                        className={`absolute top-0 mt-14 right-0 h-screen max-w-[1080px] hidden max-lg:flex `}
                    >
                        <div className="relative h-full w-full z-[9997] flex flex-col justify-between pb-14">
                            <AnimatePresence>
                                <div className=" p-5 _text font-bold">
                                    <ul className="flex flex-col gap-3" onClick={() => setDropdown(false)}>
                                        <li className="w-full px-3 h-14 bg-neon_purple rounded  flex items-center gap-3 hover:bg-neon_blue" onClick={() => {window.location.href = "#showcases"}}>Sobre</li>
                                        <li className="w-full px-3 h-14 bg-neon_purple rounded  flex items-center gap-3 hover:bg-neon_blue" onClick={() => window.location.href = "#assessments"}>Avaliações</li>
                                        <li className="w-full px-3 h-14 bg-neon_purple rounded  flex items-center gap-3 hover:bg-neon_blue" onClick={() => window.location.href = "#explore"}>Contratar</li>
                                        <li className="w-full px-3 h-14 bg-neon_purple rounded  flex items-center gap-3 hover:bg-neon_blue" onClick={() => window.location.href = "#contact"}>Contato</li>
                                    </ul>
                                </div>
                            </AnimatePresence>
                            <div className="p-5 flex flex-col gap-5 _display_text">
                                <div className="flex gap-3 !font-thin">
                                    <div className="border-b flex items-center gap-1 border-contrast_color_1  text-contrast_color_1" onClick={() => window.location.href = "mailto:joao.indicatti@outlook.com?subject=Contato"}>
                                        <IconBrandGmail  /> e-mail
                                    </div>
                                    <div className="border-b flex items-center gap-1 border-contrast_color_1 text-contrast_color_1" onClick={() => window.location.href = "https://www.linkedin.com/in/joão-pedro-indicatti-07975b265/"}>
                                        <IconBrandLinkedin  /> Linkedin
                                    </div>
                                    <div className="border-b flex items-center gap-1 border-contrast_color_1 text-contrast_color_1" onClick={() => window.location.href = "https://github.com/Indicattis"}>
                                        <IconBrandGithub  /> Github
                                    </div>
                                </div>
                                <div className=" _display_text flex items-center gap-3">
                                    <div className="min-w-16 h-16 rounded-full border-2 border-contrast_color_3 relative overflow-hidden">
                                        <Image alt="" src={Images.Profile_1} width={64} height={64}/>
                                    </div>
                                    <div className="w-full px-3 h-14 bg-contrast_color_3 rounded-t-full rounded-r-full  flex items-center gap-3 hover:bg-neon_blue">Obrigado pela visita!</div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            className={`absolute top-0 right-0  w-full transition-all h-full bg-white z-50`}
                        ></motion.div>
                        <motion.div
                            className={`absolute top-0 right-0  w-full transition-all h-full bg-[#0000001a] z-10`}
                        ></motion.div>
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
                className={`${!dropdown ? "hidden" : "flex"
                    } fixed top-0 left-0 bg-transparent h-full w-full z-50`}
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
            className={`cursor-pointer _text _small text-nowrap mr-3 max-lg:hidden ${isSelected ? "text-white" : "text-zinc-300 hover:text-white"}`}
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

