"use client";
import { motion, AnimatePresence } from "framer-motion";
import ToggleHeading from "../Product/ToggleHeading";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectFilterMBVisibility,
  setFilterMBVisibility,
} from "@/redux/slices/ModalsStateSlice";
import { CSSProperties, useEffect, useState } from "react";
import {
  BrilliantColors,
  MetalTypes,
  RingCategories,
} from "@/Shared/Constants/Filter";

const active: CSSProperties = {
  backgroundColor: "#f2cd88",
  color: "#0c2e2b",
};

interface FiltersMBProps {}

const FiltersMB: React.FC<FiltersMBProps> = () => {
  const visible = useAppSelector(selectFilterMBVisibility);
  const dispatch = useAppDispatch();
  const [Ca, setCa] = useState("");
  const [Co, setCo] = useState("");
  const [M, setM] = useState("");

  const hideFilter = () => {
    dispatch(setFilterMBVisibility(false));
  };

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    if (!visible) document.body.style.overflow = "visible";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="fixed top-[90px] right-0 left-0 bottom-0 z-[900]"
            onClick={hideFilter}
          ></motion.div>
          <motion.div
            initial={{ left: "-300px" }}
            animate={{ left: "0px" }}
            exit={{ left: "-300px" }}
            className="fixed top-[50px] md:hidden box-border FiltersMBScollBar pt-[40px] pb-[60px] flex flex-col z-[910] h-full overflow-y-auto left-0 bottom-0 w-[300px] bg-[#0c2e2b] text-[#f2cd88]"
          >
            <ToggleHeading
              name="Categories"
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="w-full flex flex-col box-border pb-[10px]">
                {RingCategories.map((cat) => {
                  return (
                    <div
                    key={cat.name}
                      onClick={() => {
                        if (Ca === cat.value) {
                          setCa("all");
                          return;
                        }
                        setCa(cat.value);
                      }}
                      style={Ca === cat.value ? active : undefined}
                      className="h-[40px] p-[0px_20px] flex w-full justify-start duration-300 items-center"
                    >
                      <p>{cat.name}</p>
                    </div>
                  );
                })}
              </div>
            </ToggleHeading>
            <ToggleHeading
              name="Colour"
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="w-full flex flex-col box-border  pb-[10px]">
                {BrilliantColors.map((cat) => {
                  return (
                    <div
                    key={cat.name}
                      onClick={() => {
                        if (Co === cat.value) {
                          setCo("all");
                          return;
                        }
                        setCo(cat.value);
                      }}
                      style={Co === cat.value ? active : undefined}
                      className="h-[40px] p-[0px_20px] flex w-full justify-start duration-300 items-center"
                    >
                      <p>{cat.name}</p>
                    </div>
                  );
                })}
              </div>
            </ToggleHeading>
            <ToggleHeading
              name="Metal"
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="w-full flex flex-col box-border pb-[10px]">
                {MetalTypes.map((cat) => {
                  return (
                    <div
                    key={cat.name}
                      onClick={() => {
                        if (M === cat.value) {
                          setM("all");
                          return;
                        }
                        setM(cat.value);
                      }}
                      style={M === cat.value ? active : undefined}
                      className="h-[40px] p-[0px_20px] flex w-full justify-start duration-300 items-center"
                    >
                      <p>{cat.name}</p>
                    </div>
                  );
                })}
              </div>
            </ToggleHeading>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FiltersMB;
