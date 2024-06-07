'use client'

import { useState, useRef, useEffect } from 'react';
import { IconCaretUp, IconHome, IconMenuDeep, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { menu_array } from '@/data/json/menu';
import getColor from '@/components/utils/getColor';

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
            className={`fixed left-0  h-14 text-white z-[9999] w-full flex justify-center transition-all duration-300  ${isScrolled ? 'bg-black shadow-lg top-0' : 'top-5 '}`}
        >
            <nav ref={navRef} className="relative flex gap-5 overflow-hidden w-full max-w-[1080px] items-center justify-center max-lg:w-[95%] z-[9999]">
                <div className="w-full h-full max-h-10 mb-4">
                    <Image width={90} height={90} alt="" src={`/video/anim_default.gif`} />
                </div>
                {menu_array.map((item, index) => {
                    return (
                        <HeaderItem
                            key={`item-`+index}
                            itemName={item.exhibition}
                            isSelected={selectedItem === item.exhibition}
                            onClick={handleItemClick}
                        />
                    )
                })}
                <AnimatePresence>
                    <motion.div
                    onClick={() => setDropdown(!dropdown)}  
                    className={`absolute hidden p-3  right-0 cursor-pointer transition-all max-lg:flex z-[10000] ${dropdown && "bg-gray"}`}>
                        {dropdown ? (
                            <motion.div
                            key="icon-caret-up"
                            initial={{y:-100}}
                            animate={dropdown && { y:0}}
                            exit={{y:100, transition: {delay: 1}}}
                            className=''
                            transition={{
                                x: { type: "spring", stiffness: 600, damping: 50 },
                            }}
                            >
                                <IconCaretUp width={35} height={35}/>
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
                                <IconMenuDeep width={35} height={35}/>
                            </motion.div> 
                        )}
                    </motion.div>
                </AnimatePresence>
                <motion.div
                    className="absolute bottom-0 h-1 bg-white transition-all duration-300 z-[9997]"
                    style={{ left: barPosition.left, width: barPosition.width }}
                />
            </nav>
            <motion.div className={`absolute rounded-md transition-all  w-full max-w-[1080px] h-full max-lg:w-[95%] z-[9997] ${dropdown ? (isScrolled ? 'opacity-0 bg-black' : "opacity-100 bg-dark") : "bg-transparent"}`} />
            
            <AnimatePresence>
            {dropdown && (
            <motion.div
            initial={{ height: 0, opacity: 0}} 
            animate={{ height: 500, opacity: 1}} 
            exit={{ height: 0, opacity: 0}}
            className={`absolute text-white top-[120%] w-full max-w-[1080px] hidden flex-col gap-5 max-lg:w-[95%] max-lg:flex z-[9997]`}>
                <motion.div
                    className={`cursor-pointer flex justify-between z-[9997] rounded-t-md p-5 ${dropdown ? (isScrolled ? 'opacity-100 bg-dark' : "opacity-100 bg-dark") : "bg-transparent"}`}
                    >
                        <span className='mt-1 ml-2'>MENU</span>
                        <IconX/>
                </motion.div> 
                <div className='w-full flex flex-col gap-3 z-[9997] p-5'>
                    {menu_array.map((item, index) => {
                        return (
                            <motion.div 
                            key={`dropdown-exhibition-`+index}
                            className='relative flex w-full h-12 justify-center items-center'
                            onClick={() => setDropdown(false)}>

                                <motion.div 
                                className={`absolute left-1 w-[99%] h-full  p-3  rounded text-white f text-sm  capitalize   z-[9997] flex gap-3 items-center
                                ${isScrolled ? "" : ""}
                                `}>
                                    
                                    <span className='mt-1'>
                                        {item.exhibition}
                                    </span>
                                </motion.div>
                                <motion.div
                                key={`neon-`+index}
                                className={`absolute bottom-0 left-0 h-full w-1 rounded z-[9999]
                                ${getColor(item.theme)}
                                `}>

                                </motion.div>
                            </motion.div>

                        )
                    })}
                </div>
                <div className={`absolute top-0 left-0  rounded-md w-full transition-all h-full ${dropdown ? (isScrolled ? 'opacity-100 bg-dark shadow-xl shadow-black' : "opacity-100 bg-dark") : "bg-gray"}`}></div>
            </motion.div>
                
            )}
            </AnimatePresence>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
                x: { type: "spring", stiffness: 600, damping: 50 },
            }}
            className={`${!dropdown ? "hidden" : "flex"} fixed top-0 left-0 bg-[#25252598] h-full w-full`} onClick={() => setDropdown(false)}>

            </motion.div>
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
