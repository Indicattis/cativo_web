'use client'

import { useState, useRef, useEffect } from 'react';
import { IconCaretUp, IconMenuDeep, IconX } from "@tabler/icons-react";
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
            <nav ref={navRef} className="relative flex gap-5 px-5 overflow-hidden w-full max-w-[1080px] z-50 items-center max-lg:w-[90%]">
                <div className=" w-full">
                    <Image width={120} height={120} alt="" src={`/video/anim_default.gif`} />
                </div>
                {menu_array.map((item, index) => {
                    return (
                        <HeaderItem
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
            <motion.div className={`absolute rounded-full transition-all  w-full max-w-[1080px]  h-full max-lg:w-[90%] ${dropdown ? "opacity-100 bg-black" : "bg-dark"} ${isScrolled ? 'opacity-0' : 'opacity-25 '}`} />
            
            <AnimatePresence>
            {dropdown && (
            <motion.div
            initial={{ height: 0, opacity: 0}} 
            animate={{ height: 500, opacity: 1}} 
            exit={{ height: 0, opacity: 0}}
            className={`absolute text-white top-[120%] w-full max-w-[1080px] hidden flex-col gap-5 max-lg:w-[90%] overflow-hidden p-5 max-lg:flex`}>
                <motion.div
                    className='cursor-pointer z-50 flex justify-end'
                    onClick={() => setDropdown(false)}
                    key="icon-x"
                    initial={{y:-100}}
                    animate={{ y:0}}
                    exit={{y:-100}}
                    transition={{
                        x: { type: "spring", stiffness: 600, damping: 50 },
                    }}
                    >
                        <IconX/>
                </motion.div> 
                <div className='w-full flex flex-col gap-3  z-50'>
                    {menu_array.map((item, index) => {
                        return (
                            <motion.div className={`p-3 
                            ${isScrolled ? "" : ""}
                            ${item.color == 'neon_red' && "border border-neon_red"}
                            ${item.color == 'neon_green' && "border border-neon_green"}
                            ${item.color == 'neon_blue' && "border border-neon_blue"}
                            `}>{item.exhibition}!</motion.div>
                        )
                    })}
                </div>
                <div className={`absolute top-0 left-0  w-full transition-all z-0 h-full ${dropdown ? "bg-black" : "bg-transparent"} ${isScrolled ? 'rounded-md' : 'rounded-[30px]'}`}></div>
            </motion.div>
                
            )}
            </AnimatePresence>
            
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
            className={`cursor-pointer mt-1 max-lg:hidden ${isSelected ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
        >
            <h3>{itemName}</h3>
        </div>
    );
}
