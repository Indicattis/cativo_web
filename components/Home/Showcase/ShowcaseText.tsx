"use client"

import { Modal } from "@/components/utils/Modal";
import { useEffect, useState } from "react";


interface ShowcaseTextProps {
    p?: string,
    className?: string
    isPoused: boolean
}

export default function ShowcaseText({ p, className }: ShowcaseTextProps) { 
    const [isMobile, setIsMobile] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    
    const handleResize = () => {
    if (window.innerWidth <= 768) { // ou qualquer valor de largura que você considere como limite para mobile/tablet
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
};

useEffect(() => {
    handleResize(); // Verifique o tamanho da tela na primeira renderização
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);

    const truncatedText = isMobile && p ? (p.length > 128 ? `${p.slice(0, 128)}...` : p) : p;
    return (
        <div className={`w-full flex flex-col ${className}`}>
            <p className="_text text-white">{truncatedText}
                {isMobile && <span className="text-neon_blue font-bold" onClick={() => setModalActive(true)}> ver mais</span>}
            </p>
            {modalActive && (
                <Modal.Root>
                    <Modal.Box>
                        <Modal.Message message={`Informações`} />
                        <Modal.Content className="flex flex-col gap-3">
                            {p}
                        </Modal.Content>
                        <Modal.Button onClick={() => setModalActive(false)} />
                    </Modal.Box>
                </Modal.Root>
            )}
        </div>
    )
}
