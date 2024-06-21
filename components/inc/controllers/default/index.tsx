import { getColor } from "@/components/utils/getColor";
import { motion } from "framer-motion";

interface ControllerProps {
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
  numOfSliders: number;
  data: any[];
}

export default function ControllerDefault({
  selectedItem,
  data,
  numOfSliders,
  setSelectedItem,
}: ControllerProps) {
  return (
    <div className="flex flex-wrap gap-3 rounded-lg py-2">
      {data.map((item, index) => {
        return (
          <motion.div
            key={`web-service-` + item.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedItem(item.id)}
            className="relative flex rounded-md justify-center items-center  "
          >
            <div
              className={`cursor-pointer rounded-xl h-12 px-3 flex items-center z-20 _text tracking-tight ${selectedItem == item.id ? "" : " text-palette_gray "}`}
            >
              {item.exhibition}
            </div>
            <motion.div
              key={`controller-bg-` + index}
              initial={{ scale: 0 }}
              animate={{ scale: selectedItem == item.id ? 1 : 0 }}
              exit={{ scale: 0 }}
              transition={{delay: 0.1, type: "spring", stiffness: 600, damping: 40}}
              className={`absolute top-0 left-0 w-full h-full z-10  rounded-xl ${getColor(
                "neon_purple"
              )} ${selectedItem == item.id ? "" : ""}`}
            ></motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
