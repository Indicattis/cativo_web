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
    <div className="flex flex-wrap gap-3 pl-5">
      {data.map((item, index) => {
        return (
          <motion.div
            key={`web-service-` + item.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedItem(item.id)}
            className="relative flex rounded-md justify-center items-center  "
          >
            <div
              className={`cursor-pointer lowercase rounded-full h-14 px-3 flex items-center z-20 _text ${selectedItem == item.id ? "bg-transparent" : "bg-dark"}`}
            >
              #{item.exhibition}
            </div>
            <motion.div
              key={`controller-bg-` + index}
              initial={{ scale: 0 }}
              animate={{ scale: selectedItem == item.id ? 1 : 0 }}
              exit={{ scale: 0 }}
              transition={{delay: 0.1, type: "spring", stiffness: 600, damping: 40}}
              className={`absolute top-0 left-0 w-full h-full z-10 shadow-lg shadow-dark rounded-full ${getColor(
                item.theme
              )} ${selectedItem == item.id ? "" : ""}`}
            ></motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
