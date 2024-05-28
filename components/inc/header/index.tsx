'use client'

import { useState, useRef, useEffect } from 'react';
import { IconCaretUp, IconHome, IconMenuDeep, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { menu_array } from '@/data/json/menu';

export default function HeaderComponent() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [barPosition, setBarPosition] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const [dropdown, setDropdown] = useState<boolean>(false)

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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header 
            className={`fixed left-0 h-14 text-white z-40 w-full flex justify-center transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg top-0' : 'top-5 '}`}
        >
            <nav ref={navRef} className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] z-50 items-center max-lg:w-[90%]">
                <div className=" w-full">
                    <Image width={120} height={120} alt="" src={`/video/anim_default.gif`} />
                </div>
                {menu_array.map((item, index) => {
                    return (
                        <HeaderItem
                            key={index}
                            itemName={item.exhibition}
                            isSelected={selectedItem === item.exhibition}
                            onClick={handleItemClick}
                        />
                    )
                })}
                <AnimatePresence>
                    <motion.div
                    onClick={() => setDropdown(!dropdown)}  
                    className={`absolute hidden p-5 right-0 cursor-pointer transition-all max-lg:flex `}>
                        {dropdown ? (
                            <motion.div
                            key="icon-caret-up"
                            initial={{y:-100}}
                            animate={dropdown && { y:0}}
                            exit={{y:100, transition: {delay: 1}}}
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            >
                                <IconCaretUp/>
                            </motion.div>
                        ) : (
                            <motion.div
                            key="icon-menu-deep"
                            initial={{y:100}}
                            animate={!dropdown && { y:0}}
                            exit={{y:-100, transition: {delay: 1}}}
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            >
                                <IconMenuDeep/>
                            </motion.div> 
                        )}
                    </motion.div>
                </AnimatePresence>
                <motion.div
                    className="absolute bottom-0 h-1 bg-white transition-all duration-300"
                    style={{ left: barPosition.left, width: barPosition.width }}
                />
            </nav>
            <motion.div className={`absolute rounded-full transition-all  w-full max-w-[1080px]  h-full max-lg:w-[90%]  ${dropdown ? (isScrolled ? 'opacity-0 bg-black' : "opacity-100 bg-dark") : "bg-transparent"}`} />
            
            <AnimatePresence>
            {dropdown && (
            <motion.div
            initial={{ height: 0, opacity: 0}} 
            animate={{ height: 500, opacity: 1}} 
            exit={{ height: 0, opacity: 0}}
            className={`absolute text-white top-[120%] w-full max-w-[1080px] hidden flex-col gap-5 max-lg:w-[90%] max-lg:flex`}>
                <motion.div
                    className={`cursor-pointer z-50 flex justify-between  p-5 ${dropdown ? (isScrolled ? 'opacity-100 bg-dark rounded-t-md' : "opacity-100 bg-dark rounded-t-3xl") : "bg-transparent"}`}
                    onClick={() => setDropdown(false)}
                    key="icon-x"
                    initial={{y:-100}}
                    animate={{ y:0}}
                    exit={{y:-100}}
                    transition={{
                        x: { type: "spring", stiffness: 600, damping: 50 },
                    }}
                    >
                        <span className='mt-1 ml-2'>MENU</span>
                        <IconX/>
                </motion.div> 
                <div className='w-full flex flex-col gap-3  p-5 z-50'>
                    {menu_array.map((item, index) => {
                        return (
                            <motion.div 
                            key={index}
                            initial={{y:-100, opacity: 0}}
                            animate={{ y:0, opacity:1}}
                            exit={{y:-100, opacity:0}}
                            transition={{
                                type: "spring", stiffness: 600, damping: 50 ,
                                delay: index * 0.1,
                            }}
                            className='relative flex w-full h-12 justify-center items-center'
                            onClick={() => setDropdown(false)}>

                                <motion.div 
                                key={index}
                                className={`absolute left-1 w-[99%] h-full bg-gray p-3  rounded text-white f text-sm  capitalize   z-[9999] flex gap-3 items-center
                                ${isScrolled ? "" : ""}
                                `}>
                                    
                                    <span className='mt-1'>
                                        {item.exhibition}
                                    </span>
                                </motion.div>
                                <motion.div
                                key={index}
                                className={`absolute bottom-0 left-0 h-full w-1 z-10 rounded 
                                ${isScrolled ? "shadow-md" : ""}
                                ${item.color == 'neon_red' && "bg-neon_red shadow-neon_red"}
                                ${item.color == 'neon_green' && "bg-neon_green shadow-neon_green"}
                                ${item.color == 'neon_green2' && "bg-neon_green2 shadow-neon_green2"}
                                ${item.color == 'neon_blue' && "bg-neon_blue shadow-neon_blue"}
                                ${item.color == 'neon_purple' && "bg-neon_purple shadow-neon_purple"}
                                `}>

                                </motion.div>
                            </motion.div>

                        )
                    })}
                </div>
                <div className={`absolute top-0 left-0  w-full transition-all z-[5] h-full ${dropdown ? (isScrolled ? 'opacity-100 bg-dark rounded-lg shadow-xl shadow-black' : "opacity-100 bg-dark rounded-3xl") : "bg-gray"}`}></div>
            </motion.div>
                
            )}
            </AnimatePresence>
            {/* <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
                x: { type: "spring", stiffness: 600, damping: 50 },
            }}
            className={`${!dropdown ? "hidden" : "flex"} fixed top-0 z-0 left-0 bg-[#25252598] h-full w-full`} onClick={() => setDropdown(false)}>

            </motion.div> */}
        </motion.header>
    );
}

interface ItemProps {
    itemName: string;
    isSelected: boolean;
    onClick: (itemName: string, itemRef: HTMLDivElement) => void;
}

function HeaderItem({ itemName, isSelected, onClick }: ItemProps) {
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
            className={`cursor-pointer mr-10 mt-1 max-lg:hidden ${isSelected ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
        >
            <h3>{itemName}</h3>
        </div>
    );
}
