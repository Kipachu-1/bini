"use client";
import React, { useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import SelectFilter from "./SelectFilter";
import { useAppSelector } from "@/redux/hooks";
import { selectJFilterSortBy } from "@/redux/slices/JFilterStateSlice";
import { sortByOptions } from "@/Shared/Constants/Filter";
import { selectNavbarVisibilityScroll } from "@/redux/slices/ModalsStateSlice";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

interface JewelryFilterBarProps {}

const JewelryFilterBar: React.FC<JewelryFilterBarProps> = () => {
  const navVisible = useAppSelector(selectNavbarVisibilityScroll);
  const [scope, animate] = useAnimate();
  const sortBy = useAppSelector(selectJFilterSortBy);
  useEffect(() => {
    if (navVisible && animate) animate(scope.current, { top: "48px" }, { duration: 0.6, delay:0.1 });
    if (!navVisible && animate) animate(scope.current, { top: "0px" }, { duration: 0.3, type:'tween'});
  }, [navVisible]);
  return (
    <AnimatePresence>
      {
        <motion.div
          ref={scope}
          initial={{ top: "0px" }}
          className="fixed justify-center flex z-[200] text-[#f2cd88] bg-[#0c2e2b] border-b border-t border-[#f2cd88] rounded-br rounded-bl right-0 left-0 w-full h-[50px]"
        >
          <div className="flex w-full h-full lg:hidden text-[14px]">
            <div className="w-full h-full flex justify-center items-center cursor-pointer">
              <h1>Filters</h1>
              <MdNavigateNext className="rotate-90 text-xl mt-[2px]" />
            </div>
            <div className="w-full h-full flex justify-center items-center cursor-pointer border-l border-[#f2cd88]">
              <SelectFilter
                name="Sort By"
                options={sortByOptions}
                optionsStyle="text-right right-1"
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center w-full h-full max-w-[1440px] box-border px-4 text-[14px]">
            <div className="flex h-full rounded">
              <SelectFilter name="Categories" />
              <SelectFilter name="Size" />
              <SelectFilter name="Colour" />
              <SelectFilter name="Pattern" />
            </div>
            <div className="h-full rounded">
              <SelectFilter
                name="Sort By"
                options={sortByOptions}
                optionsStyle="text-right"
              />
            </div>
          </div>
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default JewelryFilterBar;
