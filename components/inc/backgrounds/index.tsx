import getColor from "@/components/utils/getColor";
import { motion } from "framer-motion";

interface BackgroundProps {
  theme: string;
  content?: React.ReactNode;
}


export default function BackgroundComponent({
  theme,
  content,
}: BackgroundProps) {
  return (
    <div className={`flex flex-col justify-center items-center w-full h-full relative ${getColor(theme)} overflow-hidden`}>
      <div className="">{content}</div>
      <div className="absolute h-full w-[1920px] top-0 left-0">
        <AnimationElement num={1} wide="mini" initialX="top-[0px]" initialY="left-[-50px]" slack={30} theme={theme}/>
        <AnimationElement num={2} wide="mini" initialX="top-[-20px]" initialY="left-[100px]" slack={30} theme={theme}/>
        <AnimationElement num={3} wide="mini" initialX="top-[110px]" initialY="left-[10px]" slack={30} theme={theme}/>
        <AnimationElement num={4} wide="xs" initialX="top-[190px]" initialY="left-[110px]" slack={30} theme={theme}/>
        <AnimationElement num={5} wide="xs" initialX="top-[30px]" initialY="left-[200px]" slack={30} theme={theme}/>
        <AnimationElement num={6} wide="xs" initialX="top-[350px]" initialY="left-[320px]" slack={60} theme={theme}/>
        <AnimationElement num={7} wide="sm" initialX="top-[150px]" initialY="left-[450px]" slack={60} theme={theme}/>
        <AnimationElement num={8} wide="sm" initialX="top-[10px]" initialY="left-[330px]" slack={60} theme={theme}/>
        <AnimationElement num={9} wide="sm" initialX="top-[210px]" initialY="left-[200px]" slack={60} theme={theme}/>
        <AnimationElement num={10} wide="mini" initialX="top-[340px]" initialY="left-[-40px]" slack={60} theme={theme}/>
        <AnimationElement num={13} wide="sm" initialX="top-[-50px]" initialY="left-[600px]" slack={60} theme={theme}/>
        <AnimationElement num={14} wide="xs" initialX="top-[530px]" initialY="left-[-60px]" slack={60} theme={theme}/>
        <AnimationElement num={15} wide="sm" initialX="top-[450px]" initialY="left-[110px]" slack={60} theme={theme}/>
        <AnimationElement num={16} wide="lg" initialX="top-[580px]" initialY="left-[210px]" slack={90} theme={theme}/>
        <AnimationElement num={17} wide="lg" initialX="top-[180px]" initialY="left-[750px]" slack={90} theme={theme}/>
        <AnimationElement num={18} wide="lg" initialX="top-[330px]" initialY="left-[500px]" slack={90} theme={theme}/>
        <AnimationElement num={19} wide="lg" initialX="top-[-80px]" initialY="left-[780px]" slack={90} theme={theme}/>
        <AnimationElement num={20} wide="xl" initialX="top-[560px]" initialY="left-[520px]" slack={120} theme={theme}/>
        <AnimationElement num={22} wide="xl" initialX="top-[320px]" initialY="left-[900px]" slack={120} theme={theme}/>
        <AnimationElement num={22} wide="2xl" initialX="top-[700px]" initialY="left-[800px]" slack={150} theme={theme}/>
        <AnimationElement num={21} wide="2xl" initialX="top-[-120px]" initialY="left-[1120px]" slack={150} theme={theme}/>
        <AnimationElement num={23} wide="2xl" initialX="top-[420px]" initialY="left-[1200px]" slack={150} theme={theme}/>
        <AnimationElement num={24} wide="2xl" initialX="top-[0px]" initialY="left-[1400px]" slack={150} theme={theme}/>
      </div>
    </div>
  );
}

interface AnimateProps {
    theme: string;
    initialX: string;
    initialY: string;
    slack: number;
    wide: string
    num: number
  }

function AnimationElement({
    theme,
    initialX,
    initialY,
    slack,
    wide,
    num
  }: AnimateProps) {

    
const times = [0, 20, 40];
const positionsX = [0, -slack, 0, -slack, 0, -slack, 0];
const positionsY = [0, slack, 0, slack, 0, slack, 0];
const duration = 40;


    return (
        <motion.div
        initial={{rotate: 45}}
            animate={{
                rotate: 45,
                x: positionsY,
                y: positionsX,
            }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                times: times,
                repeat: Infinity,
                repeatDelay: 0,
            }}
            className={` rounded-full overflow-hidden absolute ${initialX} ${initialY}
                ${wide == "mini" ? "w-10 h-20" : ""}
                ${wide == "xs" ? "w-14 h-24" : ""}
                ${wide == "sm" ? "w-20 h-40" : ""}
                ${wide == "md" ? "w-28 h-48" : ""}
                ${wide == "lg" ? "w-36 h-56" : ""}
                ${wide == "xl" ? "w-48 h-72" : ""}
                ${wide == "2xl" ? "w-56 h-96" : ""}
                `}
        >
            <motion.div
                className={`${getColor(
                    theme
                )} w-full h-full shadow-lg shadow-dark rounded-full flex justify-center items-center`}
            ></motion.div>
        </motion.div>
    )
}