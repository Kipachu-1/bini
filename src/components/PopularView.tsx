"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { productList } from "@/MockData";
import Image from "next/image";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
interface PopularViewProps {}
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemAniDes1 = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};
const itemAniDes2 = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};
const PopularView: React.FC<PopularViewProps> = () => {
  const perPage = 4;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const [list, setList] = useState(productList.slice(start, end));

  const onNextClick = () => {
    const newStart = start + perPage;
    const newEnd = end + perPage;
    if (newEnd <= productList.length) {
      setStart(newStart);
      setEnd(newEnd);
      setList(productList.slice(newStart, newEnd));
    }
  };

  const onBackClick = () => {
    const newStart = start - perPage;
    const newEnd = end - perPage;
    if (newStart >= 0) {
      setStart(newStart);
      setEnd(newEnd);
      setList(productList.slice(newStart, newEnd));
    }
  };

  return (
    <div className="Popular_list-6 p-[40px_20px] md:p-[50px] xl:p-[100px] text-[black] min-h-min bg-white flex flex-col  justify-center items-center w-full">
      <div className="flex flex-col h-fit gap-[40px] w-full">
        <div className="w-full">
          <p className="w-full text-left text-[40px] md:text-[48px] text-[#0c2e2b]">
            TRENDING JEWELRIES
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            variants={container}
            initial={"hidden"}
            animate="visible"
            exit={"hidden"}
            key={list[0].id + "-" + list[list.length - 1].id}
            className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 min-h-min h-auto relative"
          >
            <div className="absolute flex items-center justify-between inset-0">
              <div
                onClick={onBackClick}
                className="w-10 h-12 flex justify-center items-center z-10 bg-[#ffffff32] cursor-pointer border  border-black border-l-0"
              >
                <MdNavigateNext className="rotate-180 text-3xl" color="black" />
              </div>
              <div
                onClick={onNextClick}
                className="w-10 h-12 flex justify-center items-center z-10  bg-[#ffffff32] cursor-pointer border  border-black border-r-0"
              >
                <MdNavigateNext className="text-3xl" color="black" />
              </div>
            </div>
            {list.map((item, index) => {
              let even = index % 2 === 0 ? true : false;
              return (
                <motion.div
                  className={`w-full flex flex-none gap-1`}
                  key={item.id + "_card"}
                  variants={even ? itemAniDes1 : itemAniDes2}
                  style={{
                    marginTop: even ? "20px" : "0px",
                    flexDirection: even ? "column-reverse" : "column",
                  }}
                >
                  <motion.div
                    className={`flex aspect-square shadow-xl w-full relative border-[#f2cd88] rounded border-2`}
                    key={item.id + "_card_img_holder"}
                  >
                    <Link key={item.image + "_link"} href={`/j/${item.id}`}>
                      <Image
                        fill
                        src={item.image}
                        alt=""
                        priority
                        className=" object-cover"
                        key={item.image + "_key"}
                      />
                    </Link>
                  </motion.div>
                  <motion.div key={item.name + "div-holder"}>
                    <p key={item.name} className="p-[0px_10px]">
                      {item.name}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PopularView;
