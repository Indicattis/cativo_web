import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  getBottomGradient,
  getColor,
  getRadiusGradient,
  getShadow,
  getTopGradient,
} from "@/components/utils/getColor";
import { useState, useEffect, useRef } from "react";

interface InterProps {
  color?: string;
}

const colors = [
  "neon_green",
  "neon_red",
  "neon_purple",
  "neon_blue",
  "neon_pink",
];

export default function ExhibitionComponent({ color }: InterProps) {
  const [light, setLight] = useState("neon_red");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ballWidth = 80; // Ball width in pixels
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        const maxX = offsetWidth / 2 - ballWidth / 2;
        const maxY = offsetHeight / 2 - ballWidth / 2;

        if (x.get() > maxX) x.set(maxX);
        if (x.get() < -maxX) x.set(-maxX);
        if (y.get() > maxY) y.set(maxY);
        if (y.get() < -maxY) y.set(-maxY);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [ballWidth, x, y]);

  const changeLightColor = () => {
    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];
    setLight(randomColor);
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-full flex items-center justify-center bg-black relative overflow-hidden`}
    >
      <BordersNeon light={light} x={x} ballWidth={ballWidth} />

      <motion.div
        whileTap={{ scale: 0.95 }}
        initial={{ y: 600 }}
        animate={{
          y: 200,
        }}
        transition={{
          y: {
            duration: 0.2,
            delay: 1,
            type: "spring",
            stiffness: 600,
            damping: 130,
          },
        }}
        drag
        dragElastic={0.1}
        dragConstraints={containerRef} // Limit drag to container
        style={{ x, y }}
        className={`absolute z-[10000] h-16 w-16 shadow-md ${getShadow(
          light
        )} ${getColor(light)} rounded-full cursor-pointer flex justify-center items-center`}
        onClick={changeLightColor}
      >
        <Image
          draggable={false}
          className="rotate-90 opacity-40"
          color="#000000"
          alt=""
          src={`/svg/cativo/logo.svg`}
          width={30}
          height={30}
        />
        <div
          className={`absolute z-0 w-[200%] h-[200%]  opacity-15 ${getRadiusGradient(
            light
          )}`}
        ></div>
      </motion.div>
      <div className="relative w-full h-full flex gap-5">
        <div className="w-full h-full flex flex-col justify-center items-end text-end gap-10 overflow-hidden">
          {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
          <motion.div
            initial={{ x: 200 }}
            animate={{
              x: 0,
            }}
            exit={{ x: 200 }}
            transition={{
              x: {
                duration: 0.2,
                delay: 0.3,
                type: "spring",
                stiffness: 600,
                damping: 130,
              },
            }}
            className="flex flex-col"
          >
            <h1 className="_display_text">Olá!</h1>
            <span className="_text text-zinc-400">Seja bem vindo.</span>
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            animate={{
              x: 0,
            }}
            exit={{ x: 200 }}
            transition={{
              x: {
                duration: 0.2,
                delay: 0.7,
                type: "spring",
                stiffness: 600,
                damping: 130,
              },
            }}
            className="flex flex-col"
          >
            <h1 className="_display_text">Eu sou um</h1>
            <span className="_text text-zinc-400">Desenvolvedor Web</span>
          </motion.div>
          {/* Bola aqui */}
        </div>
        <div className="w-full h-full flex justify-start items-center text-start gap-2 overflow-hidden">
          {/* <Image draggable={false} width={300} height={300} alt="" src={`/img/cativo-logo-2.png`} /> */}
          <motion.div
            initial={{ x: -200 }}
            animate={{
              x: 0,
            }}
            exit={{ x: -200 }}
            transition={{
              x: {
                duration: 0.2,
                delay: 0.5,
                type: "spring",
                stiffness: 600,
                damping: 130,
              },
            }}
            className="flex flex-col"
          >
            <h1 className="_display_text">meu nome é:</h1>
            <span className="_text text-zinc-400">
              João Pedro Indicatti
            </span>
          </motion.div>
          {/* Bola aqui */}
        </div>
      </div>
    </div>
  );
}

type BorderProps = {
  light: string;
  x: any; // MotionValue from framer-motion
  ballWidth: number;
};

function BordersNeon({ light, x, ballWidth }: BorderProps) {
  const [translateX, setTranslateX] = useState(0);

  useMotionValueEvent(x, "change", (latest: number) => {
    setTranslateX(latest);
  });

  const width = `${ballWidth * 2}px`;
  const translateXStyle = `translateX(calc(${translateX}px))`;

  return (
    <>
      {/* bordas visuais */}
      <motion.div
        style={{ transform: translateXStyle, width }}
        initial={{ height: "0" }}
        animate={{ height: "200px" }}
        exit={{ height: "0" }}
        transition={{ delay: 1 }}
        className={`absolute top-0 z-[9000] h-1 ${getBottomGradient(light)} ${getShadow(
          light
        )} opacity-10`}
      ></motion.div>
      <motion.div
        style={{ transform: translateXStyle, width }}
        initial={{ width: "0" }}
        animate={{ width }}
        exit={{ width: "0" }}
        transition={{ delay: 1 }}
        className={`absolute top-0 z-[9000] h-[2px] ${getColor(
          light
        )} shadow-md ${getShadow(light)} rounded-s-full`}
      ></motion.div>
      <motion.div
        style={{ transform: translateXStyle, width }}
        initial={{ height: "0" }}
        animate={{ height: "100px" }}
        exit={{ height: "0" }}
        transition={{ delay: 1 }}
        className={`absolute z-[9000] bottom-0 h-1 ${getTopGradient(light)} ${getShadow(
          light
        )} opacity-10`}
      ></motion.div>
      <motion.div
        style={{ transform: translateXStyle, width }}
        initial={{ width: "0" }}
        animate={{ width }}
        exit={{ width: "0" }}
        transition={{ delay: 1 }}
        className={`absolute z-[9000] bottom-0 h-[2px] ${getColor(
          light
        )} shadow-md ${getShadow(light)}`}
      ></motion.div>
    </>
  );
}
