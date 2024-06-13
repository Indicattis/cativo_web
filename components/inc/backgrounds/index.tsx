import { getColor } from "@/components/utils/getColor";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      <div className="z-20">{content}</div>
      <div className="absolute h-full w-[1920px] top-0 left-0">
        <AnimationElement num={1} wide="mini" initialX="top-[0px]" initialY="left-[-50px]" slack={30} theme={theme}/>
        <AnimationElement num={2} wide="mini" initialX="top-[-20px]" initialY="left-[100px]" slack={30} theme={theme}/>
        <AnimationElement num={3} wide="mini" initialX="top-[110px]" initialY="left-[10px]" slack={30} theme={theme}/>
        <AnimationElement num={10} wide="mini" initialX="top-[340px]" initialY="left-[-40px]" slack={30} theme={theme}/>
        <AnimationElement num={90} wide="mini" initialX="top-[640px]" initialY="left-[120px]" slack={30} theme={theme}/>
        <AnimationElement num={90} wide="mini" initialX="top-[100px]" initialY="left-[420px]" slack={30} theme={theme}/>
        <AnimationElement num={90} wide="mini" initialX="top-[350px]" initialY="left-[60px]" slack={30} theme={theme}/>
        <AnimationElement num={50} wide="xs" initialX="top-[190px]" initialY="left-[110px]" slack={60} theme={theme}/>
        <AnimationElement num={52} wide="xs" initialX="top-[30px]" initialY="left-[200px]" slack={60} theme={theme}/>
        <AnimationElement num={53} wide="xs" initialX="top-[230px]" initialY="left-[320px]" slack={60} theme={theme}/>
        <AnimationElement num={54} wide="xs" initialX="top-[750px]" initialY="left-[450px]" slack={60} theme={theme}/>
        <AnimationElement num={55} wide="xs" initialX="top-[530px]" initialY="left-[-60px]" slack={60} theme={theme}/>
        <AnimationElement num={56} wide="xs" initialX="top-[730px]" initialY="left-[110px]" slack={60} theme={theme}/>
        <AnimationElement num={57} wide="xs" initialX="top-[190px]" initialY="left-[0px]" slack={60} theme={theme}/>
        <AnimationElement num={60} wide="sm" initialX="top-[-50px]" initialY="left-[600px]" slack={90} theme={theme}/>
        <AnimationElement num={61} wide="sm" initialX="top-[150px]" initialY="left-[450px]" slack={90} theme={theme}/>
        <AnimationElement num={62} wide="sm" initialX="top-[680px]" initialY="left-[-100px]" slack={90} theme={theme}/>
        <AnimationElement num={63} wide="sm" initialX="top-[10px]" initialY="left-[330px]" slack={90} theme={theme}/>
        <AnimationElement num={64} wide="sm" initialX="top-[210px]" initialY="left-[200px]" slack={90} theme={theme}/>
        <AnimationElement num={65} wide="sm" initialX="top-[360px]" initialY="left-[300px]" slack={90} theme={theme}/>
        <AnimationElement num={80} wide="md" initialX="top-[170px]" initialY="left-[550px]" slack={120} theme={theme}/>
        <AnimationElement num={81} wide="md" initialX="top-[420px]" initialY="left-[1090px]" slack={120} theme={theme}/>
        <AnimationElement num={82} wide="md" initialX="top-[620px]" initialY="left-[850px]" slack={120} theme={theme}/>
        <AnimationElement num={70} wide="md" initialX="top-[450px]" initialY="left-[110px]" slack={120} theme={theme}/>
        <AnimationElement num={71} wide="md" initialX="top-[-220px]" initialY="left-[410px]" slack={120} theme={theme}/>
        <AnimationElement num={72} wide="md" initialX="top-[-220px]" initialY="left-[660px]" slack={120} theme={theme}/>
        <AnimationElement num={73} wide="md" initialX="top-[120px]" initialY="left-[1750px]" slack={120} theme={theme}/>
        <AnimationElement num={74} wide="md" initialX="top-[0px]" initialY="left-[1390px]" slack={120} theme={theme}/>
        <AnimationElement num={75} wide="md" initialX="top-[380px]" initialY="left-[780px]" slack={120} theme={theme}/>
        <AnimationElement num={76} wide="md" initialX="top-[620px]" initialY="left-[380px]" slack={120} theme={theme}/>
        <AnimationElement num={77} wide="md" initialX="top-[-20px]" initialY="left-[950px]" slack={120} theme={theme}/>
        <AnimationElement num={16} wide="lg" initialX="top-[580px]" initialY="left-[210px]" slack={150} theme={theme}/>
        <AnimationElement num={17} wide="lg" initialX="top-[180px]" initialY="left-[750px]" slack={150} theme={theme}/>
        <AnimationElement num={18} wide="lg" initialX="top-[330px]" initialY="left-[500px]" slack={150} theme={theme}/>
        <AnimationElement num={19} wide="lg" initialX="top-[-80px]" initialY="left-[780px]" slack={150} theme={theme}/>
        <AnimationElement num={20} wide="xl" initialX="top-[560px]" initialY="left-[520px]" slack={180} theme={theme}/>
        <AnimationElement num={22} wide="xl" initialX="top-[320px]" initialY="left-[900px]" slack={180} theme={theme}/>
        <AnimationElement num={28} wide="xl" initialX="top-[-400px]" initialY="left-[1050px]" slack={180} theme={theme}/>
        <AnimationElement num={22} wide="2xl" initialX="top-[700px]" initialY="left-[800px]" slack={180} theme={theme}/>
        <AnimationElement num={21} wide="2xl" initialX="top-[-180px]" initialY="left-[1120px]" slack={210} theme={theme}/>
        <AnimationElement num={23} wide="2xl" initialX="top-[400px]" initialY="left-[1200px]" slack={210} theme={theme}/>
        <AnimationElement num={24} wide="2xl" initialX="top-[0px]" initialY="left-[1400px]" slack={210} theme={theme}/>
        <AnimationElement num={25} wide="2xl" initialX="top-[580px]" initialY="left-[1500px]" slack={210} theme={theme}/>
        <AnimationElement num={26} wide="2xl" initialX="top-[120px]" initialY="left-[1750px]" slack={210} theme={theme}/>
        <AnimationElement num={27} wide="2xl" initialX="top-[-480px]" initialY="left-[1550px]" slack={210} theme={theme}/>
        <AnimationElement num={29} wide="2xl" initialX="top-[-280px]" initialY="left-[1950px]" slack={210} theme={theme}/>
      </div>
    </div>
  );
}

interface AnimateProps {
    theme: string;
    initialX: string;
    initialY: string;
    slack: number;
    wide: string;
    num: number;
}



function AnimationElement({
  theme,
  initialX,
  initialY,
  slack,
  wide,
  num
}: AnimateProps) {
  // Define variações de tempos
  const timesVariations = [
      [0, 20, 40],
      [0, 5, 40],
      [0, 15, 30, 45],
      [0, 10, 20, 30, 40]
  ];

  // Estado para armazenar os tempos selecionados
  const [selectedTimes, setSelectedTimes] = useState<number[]>([]);

  useEffect(() => {
      // Sorteia uma das variações de tempos ao montar o componente
      const randomTimes = timesVariations[Math.floor(Math.random() * timesVariations.length)];
      setSelectedTimes(randomTimes);
  }, []);

  const positionsX = [0, -slack, slack, -slack, slack, -slack, 0];
  const positionsY = [0, slack, -slack, slack, -slack, slack, 0];
  const duration = 40;

  // Checa se os tempos foram selecionados
  if (selectedTimes.length === 0) return null;

  return (
      <motion.div
          initial={{ rotate: 45 }}
          animate={{
              rotate: 45,
              x: positionsY,
              y: positionsX,
          }}
          transition={{
              duration: duration,
              ease: "easeInOut",
              times: selectedTimes,
              repeat: Infinity,
              repeatDelay: 0,
          }}
          className={`rounded-full overflow-hidden absolute ${initialX} ${initialY}
              ${wide === "mini" ? "w-[20px] h-[40px]" : ""}
              ${wide === "xs" ? "w-[30px] h-[60px]" : ""}
              ${wide === "sm" ? "w-[45px] h-[90px]" : ""}
              ${wide === "md" ? "w-[60px] h-[120px]" : ""}
              ${wide === "lg" ? "w-[90px] h-[180px]" : ""}
              ${wide === "xl" ? "w-[130px] h-[260px]" : ""}
              ${wide === "2xl" ? "w-[200px] h-[400px]" : ""}
              `}
      >
          <motion.div
              className={`${getColor(theme)} w-full h-full shadow-lg shadow-dark rounded-full flex justify-center items-center _text _small text-zinc-400`}
          ></motion.div>
      </motion.div>
  );
}

