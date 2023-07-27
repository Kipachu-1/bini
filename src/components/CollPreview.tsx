"use client";
import React from "react";
import Image from "next/image";
import { useAnimate, motion } from "framer-motion";
interface CollPreviewProps {}

const CollPreview: React.FC<CollPreviewProps> = () => {
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [scope3, animate3] = useAnimate();

  return (
    <div className="Gallery-3 z-50 h-min min-h-min bg-[white] flex flex-col justify-center items-center content-center flex-nowrap p-[40px_20px] md:p-[40px]  xl:p-[100px] overflow-visible w-full  text-[black]">
      <div className="flex flex-col md:flex-row max-w-[1000px] w-full p-0 overflow-visible relative h-min box-border gap-[10px] text-[20px]">
        <div className="flex flex-col gap-y-[30px] w-full ">
          <div className="w-full relative aspect-square ">
            <Image
              src={"/image1.webp"}
              quality={100}
              alt=""
              style={{
                objectFit: "cover",
                filter: "grayscale(100%)",
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
            Добавьте нотку гламура в свою коллекцию с помощью этого изысканного
            кольца из розового золота с величественным центральным камнем
            аметистом.
          </motion.p>
        </div>
        <div className="flex flex-col gap-y-[30px] w-full">
          <div className="w-full relative aspect-square">
            <Image
              src={"/image2.webp"}
              quality={100}
              alt=""
              fill
              style={{
                objectFit: "cover",
                height: "100%",
                filter: "grayscale(100%)",
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
            Откройте для себя наше потрясающее золотое ожерелье, украшенное
            ослепительными сапфирами и бриллиантами, - вечное сокровище, которое
            вы будете бережно хранить вечно.
          </motion.p>
        </div>
        <div className="flex flex-col gap-y-[30px] w-full">
          <div className="w-full relative aspect-square">
            <Image
              src={"/image3.webp"}
              quality={100}
              alt=""
              fill
              style={{
                objectFit: "cover",
                height: "100%",
                filter: "grayscale(100%)",
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
            Сделайте пленительное заявление с этими завораживающими жемчужными
            серьгами, заключенными в роскошную золотую оправу - просто
            очаровательно.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CollPreview;
