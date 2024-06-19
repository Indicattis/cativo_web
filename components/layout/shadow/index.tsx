import { getRadiusGradient } from "@/components/utils/getColor";
import { motion } from "framer-motion";

type ShadowProps = {
    theme: string | undefined;
    height?: number;
    width?: number;
    distanceY: number
    distanceX: number;
    slack: number
};

export default function DefaultShadow({ theme, height, width, distanceY, distanceX, slack}: ShadowProps) {

    const positionsX = [0, 200+slack, 0, -200-slack, 0, -200-slack, 0];
    const positionsY = [distanceY, distanceY-50, distanceY, distanceY-50, distanceY, distanceY-50, distanceY];
    const duration = 40;
  
    return (
        <motion.div
            
          animate={{
            x: positionsX,
            y: positionsY,
  
        }}
        transition={{
            duration: duration,
            ease: "easeInOut",
            times: [0, 20, 40],
            repeat: Infinity,
            repeatDelay: 0,
        }}
            style={{ width: width, height: height, y: distanceY, x: distanceX }}
            className={`absolute z-0 
                opacity-15 
                transition-all
                ${getRadiusGradient(theme)}`}
        ></motion.div>
    );
}
