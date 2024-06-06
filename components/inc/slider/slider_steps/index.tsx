import getColor from "@/components/utils/getColor";
import {
  IconCaretLeft,
  IconCaretRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface SliderProps {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  numOfSliders: number;
  data: any[];
  showControllers: boolean;
  isAutoPlay: boolean;
}

export default function SliderStepsComponent({
  selectedItem,
  setSelectedItem,
  numOfSliders,
  data,
  showControllers,
  isAutoPlay,
}: SliderProps) {
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(100);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [autoPlay, setAutoPlay] = useState<boolean>(isAutoPlay);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoPlay) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            return 0;
          }
        });
        setProgress((prevProgress) => prevProgress + 1);
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [selectedItem, autoPlay]);

  useEffect(() => {
    if (seconds === 0) {
      changeItem("increment");
      setProgress(0);
      setSeconds(100);
    } else {
      setProgress(100 - seconds);
    }
  }, [seconds]);

  const changeItem = (oper: "increment" | "decrement") => {
    if (oper === "increment") {
      if (selectedItem === numOfSliders) {
        setSelectedItem(1);
      } else {
        setSelectedItem(selectedItem + 1);
      }
    } else {
      if (selectedItem === 1) {
        setSelectedItem(numOfSliders);
      } else {
        setSelectedItem(selectedItem - 1);
      }
    }

    setProgress(0);
    setSeconds(100);
  };

  return (
    <div className="h-full w-full relative flex flex-col">
      <div className="h-full w-full relative flex min-h-[400px]">
        {windowWidth > 748 ? (
          data.map((item, index) => (
            <AnimatePresence key={item.id}>
              <motion.div
                key={index + 1}
                className={`relative w-full h-[400px] flex items-center justify-center cursor-pointer transition-all text-2xl max-lg:text-sm  ${
                  selectedItem == item.id ? "opacity-100" : " opacity-65"
                }`}
                onClick={() => {
                  setSelectedItem(item.id), setSeconds(100);
                }}
              >
                <Image
                  className="w-full h-full object-cover"
                  draggable={false}
                  alt=""
                  src={item.logo}
                  width={2000}
                  height={2000}
                />
                <div
                  className={`absolute top-0 bg-black  w-full flex items-center justify-center text-center pt-1 text-white z-50`}
                >
                  {item.exhibition}
                </div>
                <div
                  className={`absolute top-0 opacity-75 h-16  w-full ${
                    selectedItem == item.id
                      ? ""
                      : "bg-gradient-to-b from-black to-transparent"
                  }`}
                ></div>
                <div
                  className={`absolute bottom-0 opacity-75 h-16  w-full ${
                    selectedItem == item.id
                      ? ""
                      : "bg-gradient-to-t from-black to-transparent"
                  }`}
                ></div>
                {selectedItem == item.id && (
                  <div className="absolute bottom-5 w-4/5 h-1 bg-gray rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColor(
                        item.theme
                      )} w-full transition-all`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
                {selectedItem == item.id && (
                  <div
                    className={`absolute bottom-10 flex gap-3 w-full items-center justify-center `}
                  >
                    <div
                      className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center ${getColor(
                        item.theme
                      )}`}
                      onClick={() => changeItem("decrement")}
                    >
                      <IconCaretLeft />
                    </div>
                    <div
                      className={` w-10 h-10 cursor-pointer rounded-full flex items-center justify-center ${getColor(
                        item.theme
                      )}`}
                      onClick={() => setAutoPlay(!autoPlay)}
                    >
                      {autoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
                    </div>
                    <div
                      className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center ${getColor(
                        item.theme
                      )}`}
                      onClick={() => changeItem("increment")}
                    >
                      <IconCaretRight />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ))
        ) : (
          <AnimatePresence>
            <motion.div
              className={`absolute w-full h-[400px] flex items-center justify-center cursor-pointer transition-all text-xl`}
            >
              <Image
                className="w-full h-full object-cover"
                draggable={false}
                alt=""
                src={data[selectedItem - 1].logo}
                width={2000}
                height={2000}
              />
              <div
                className={`absolute top-0 bg-black  w-full flex items-center justify-center text-center pt-1 text-white z-50`}
              >
                {data[selectedItem - 1].exhibition}
              </div>
              <div className="absolute top-0 opacity-100 h-16 bg-gradient-to-b from-black to-transparent w-full"></div>
              <div className="absolute bottom-0 opacity-100 h-16 bg-gradient-to-t from-black to-transparent w-full"></div>
              <div className="absolute bottom-5 w-4/5 h-1 bg-gray rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white w-full transition-all`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </motion.div>
            <div
              className="absolute bottom-10 p-3 cursor-pointer text-white bg-gradient-to-l to-[#00000059] from-transparent"
              onClick={() => setAutoPlay(!autoPlay)}
            >
              {autoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
            </div>
            <div
              className="absolute pt-4 bottom-10 right-0 p-3 cursor-pointer text-white bg-gradient-to-r to-[#00000059] from-transparent"
              onClick={() => changeItem("increment")}
            >
              Próximo
            </div>
          </AnimatePresence>
        )}
      </div>
      {showControllers && windowWidth < 786 && (
        <div className="relative grid grid-cols-3 w-full bg-dark">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedItem(item.id), setProgress(0), setSeconds(100);
                }}
                className={`relative flex text-xs p-2  h-10 w-18 bg-dark justify-between items-center ${
                  selectedItem == item.id ? "" : ""
                }`}
              >
                <span className="z-50 ">{item.exhibition}</span>
                {selectedItem == item.id && (
                  <div className="absolute left-0 w-full h-full bg-gray overflow-hidden">
                    <div
                      className={`h-full bg-${item.theme} w-full transition-all opacity-100`}
                      style={{ width: `${autoPlay ? progress : "100"}%` }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
