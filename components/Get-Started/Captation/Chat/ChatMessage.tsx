import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MessageProps {
    text: string | ReactNode;
    delay: number;
    side: "left" | "right"
  }


export default function ChatMessage ({ text, delay, side }: MessageProps) {
    return  (
    <motion.div 
    initial={{ height: 0, scale: 0}}
    animate={{  height: "auto", scale: 1}}
    exit={{ height: 0, scale: 0}}
    transition={{delay: delay*0.1}}
    className={`w-full flex  ${side == "left" ? "justify-start" : "justify-end"}`}>
        <motion.div
        className={`
            flex flex-col justify-center  _text  max-w-[300px] bg-purple rounded-3xl p-3
            ${side == "left" ? " rounded-bl-none" : " rounded-br-none"}
            `}
        >
        {text} 
            
        </motion.div>
        
    </motion.div>
    )
  };