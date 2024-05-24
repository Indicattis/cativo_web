'use client'

import { useState, useRef, useEffect } from 'react';
import { IconMenuDeep } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from 'framer-motion';

export default function HeaderComponent() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [barPosition, setBarPosition] = useState<{ left: number, width: number }>({ left: 0, width: 0 });
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

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
                <div className="p-4 min-w-">
                    <Image width={120} height={120} alt="" src={`/video/anim_default.gif`} />
                </div>
                <HeaderItem
                    itemName="Home"
                    isSelected={selectedItem === "Home"}
                    onClick={handleItemClick}
                />
                <HeaderItem
                    itemName="Portifólio"
                    isSelected={selectedItem === "Portifólio"}
                    onClick={handleItemClick}
                />
                <HeaderItem
                    itemName="Galeria"
                    isSelected={selectedItem === "Galeria"}
                    onClick={handleItemClick}
                />
                <HeaderItem
                    itemName="Serviços"
                    isSelected={selectedItem === "Serviços"}
                    onClick={handleItemClick}
                />
                <HeaderItem
                    itemName="Sobre"
                    isSelected={selectedItem === "Sobre"}
                    onClick={handleItemClick}
                />
                <div className="absolute p-5 right-0">
                    <IconMenuDeep />
                </div>
                <motion.div
                    className="absolute bottom-0 h-1 bg-white transition-all duration-300"
                    style={{ left: barPosition.left, width: barPosition.width }}
                />
            </nav>
            <motion.div className={`absolute rounded-full border border-gray bg-dark w-full max-w-[1080px]  h-full max-lg:w-[90%]
            ${isScrolled ? 'opacity-0' : 'opacity-25 '}`} />
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
