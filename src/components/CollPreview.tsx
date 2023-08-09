"use client";
import React from "react";
import Image from "next/image";
import { useAnimate, motion } from "framer-motion";
import { productList } from "@/MockData";
interface CollPreviewProps {}

const CollPreview: React.FC<CollPreviewProps> = () => {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();

  return (
    <div className="Gallery-3 z-50 h-min min-h-min bg-[white] flex flex-col justify-center items-center content-center flex-nowrap p-[40px_20px] md:p-[40px]  xl:p-[100px] overflow-visible w-full  text-[black]">
      <div className="flex flex-col md:flex-row w-full p-0 overflow-visible relative h-min box-border gap-[20px] text-[20px]">
        <div className="flex flex-col gap-y-[16px] w-full ">
          <div className="w-full relative aspect-square ">
            <Image
              src={productList[0].image}
              quality={100}
              alt=""
              style={{
                objectFit: "cover",
              }}
              fill
            />
          </div>
          <motion.p
            ref={scope1}
            initial={{ opacity: 0, y: 20 }}
            onViewportEnter={() => {
              animate1(scope1.current, { y: 0, opacity: 1 }, { duration: 0.5 });
            }}
          >
            Add a touch of glamor to your collection with this exquisite rose
            gold ring featuring a majestic center stone amethyst.
          </motion.p>
        </div>
        <div className="flex flex-col gap-y-[16px] w-full">
          <div className="w-full relative aspect-square">
            <Image
              src={productList[6].image}
              quality={100}
              alt=""
              fill
              style={{
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
          <motion.p
            ref={scope2}
            initial={{ opacity: 0, y: 20 }}
            onViewportEnter={() => {
              animate2(scope2.current, { y: 0, opacity: 1 }, { duration: 0.5 });
            }}
          >
            Discover our stunning gold necklace set with dazzling sapphires and
            diamonds, a timeless treasure that you'll cherish forever.
          </motion.p>
        </div>
        <div className="flex flex-col gap-y-[16px] w-full">
          <div className="w-full relative aspect-square">
            <Image
              src={productList[4].image}
              quality={100}
              alt=""
              fill
              style={{
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
          <motion.p
            ref={scope3}
            initial={{ opacity: 0, y: 20 }}
            onViewportEnter={() => {
              animate3(scope3.current, { y: 0, opacity: 1 }, { duration: 0.5 });
            }}
          >
            Make a captivating statement with these mesmerizing pearl earrings
            encased in a luxurious gold setting - simply enchanting.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CollPreview;
