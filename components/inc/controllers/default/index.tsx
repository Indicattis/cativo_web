import getColor from "@/components/utils/getColor";
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
    <div className="flex flex-wrap gap-5">
      {data.map((item, index) => {
        return (
          <motion.div
            key={`web-service-` + item.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedItem(item.id)}
            className="relative flex rounded-md justify-center items-center  "
          >
            <div
              className={`cursor-pointer rounded-3xl  p-3 z-20 text-xs shadow shadow-dark ${selectedItem == item.id ? "bg-transparent" : "bg-dark"}`}
            >
              {item.exhibition}
            </div>
            <motion.div
              key={`controller-bg-` + index}
              initial={{ scale: 0 }}
              animate={{ scale: selectedItem == item.id ? 1 : 0 }}
              exit={{ width: 0 }}
              className={`absolute left-0 w-full h-full z-10 rounded-3xl shadow-lg shadow-dark ${getColor(
                item.theme
              )} ${selectedItem == item.id ? "" : ""}`}
            ></motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
