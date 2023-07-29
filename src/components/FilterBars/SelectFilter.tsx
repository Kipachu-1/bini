"use client";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
interface SelectFilterProps {
  name: string;
  options?: Option[];
  optionsStyle?: string;
  onClick?: Function;
}
interface Option {
  name: string;
  value: string;
}

const SelectFilter: React.FC<SelectFilterProps> = ({
  name,
  options,
  optionsStyle,
  onClick,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setActive(!active);
      }}
      className="group relative flex cursor-pointer px-2 duration-300 w-full h-full justify-center items-center z-10"
      style={{
        backgroundColor: active ? "#f2cd88" : "transparent",
        color: active ? "#0c2e2b" : "#f2cd88",
      }}
    >
      <p className="">{name}</p>
      <MdNavigateNext className="text-xl rotate-90 mt-[2px]" />
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className={`absolute right-0 top-[110%] rounded w-fit 
            bg-[#0c2e2b] text-[#f2cd88] h-auto flex flex-col text-[16px]
             justify-center items-center p-[20px_0px] ${optionsStyle}`}
          >
            {options?.map((item, index: number) => {
              return (
                <div
                  key={item.name + "id"}
                  className="w-full h-fit p-[8px_30px] whitespace-nowrap hover:bg-[#cacaca4b] duration-300"
                >
                  <p key={item.name + "id_p"}>{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectFilter;
