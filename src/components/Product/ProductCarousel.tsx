"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { Button } from "@mui/material";
import { ProductInterface } from "@/Interfaces/ProductInterface";
import { MdNavigateNext } from "react-icons/md";
import { productList } from "@/MockData";
import Link from "next/link";
interface ProductCarouselProps {
  list: ProductInterface[];
  name: string;
  buttonUrl?: string;
  buttonText?: string;
}
interface BlockListProps {
  list: ProductInterface[];
}
const BlockList: React.FC<BlockListProps> = ({ list }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full flex-nowrap gap-4">
      {list.map((item) => {
        return (
          <div
            key={item.id}
            className="relative w-full aspect-square shadow-lg cursor-pointer"
          >
            <Link href={`/j/${item.id}`}>
              <Image alt="" src={item.image} fill quality={100} priority />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  list,
  buttonUrl,
  name,
  buttonText,
}) => {
  const [activeBlock, setActiveBlock] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  const onNextClick = () => {
    if (end + 4 <= list.length) {
      setActiveBlock((prev) => (prev + 1) % 3);
      setStart((prev) => prev + 4);
      setEnd((prev) => prev + 4);
    }
  };

  const onBackClick = () => {
    if (start - 4 >= 0) {
      setActiveBlock((prev) => (prev - 1 + 3) % 3);
      setStart((prev) => prev - 4);
      setEnd((prev) => prev - 4);
    }
  };

  const canGoBack = start - 4 >= 0;
  const canGoNext = end + 4 <= list.length;

  return (
    <div className="Text-2 z-10 box-border overflow-hidden relative w-full h-fit flex items-center flex-col justify-start xl:p-[100px_60px] xl:pt-[60px] md:p-[80px_40px] p-[60px_20px] bg-[#fff] ">
      <div className="relative  z-10 flex flex-col items-center justify-center gap-[40px] md:gap-[50px] flex-nowrap w-full">
        <h1 className="text-black text-3xl">{name}</h1>
        <div className="w-full h-full relative">
          <div className="absolute flex items-center justify-between inset-0">
            <div
              onClick={onBackClick}
              className="w-10 h-12 flex justify-center items-center z-10 bg-[#ffffff32] cursor-pointer border  border-black border-l-0"
            >
              <MdNavigateNext className=" rotate-180 text-3xl" color="black" />
            </div>
            <div
              onClick={onNextClick}
              className="w-10 h-12 flex justify-center items-center z-10  bg-[#ffffff32] cursor-pointer border  border-black border-r-0"
            >
              <MdNavigateNext className="text-3xl" color="black" />
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlock ? activeBlock : "empty"}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BlockList list={list.slice(start, end)} />
            </motion.div>
          </AnimatePresence>
        </div>
        {buttonUrl && (
          <Button
            variant="outlined"
            sx={{
              padding: "10px 20px",
              borderColor: "black",
              color: "black", // Set initial text color
              "&:hover": {
                color: "black", // Change text color on hover
              },
            }}
            className="rounded-none hover:bg-transparent"
          >
            {buttonText}
          </Button>
        )}
      </div>
      <div className="section-2-bg absolute inset-0 w-full h-full bg-transparent"></div>
    </div>
  );
};

export default ProductCarousel;
