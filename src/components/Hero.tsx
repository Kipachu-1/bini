"use client";
import Image from "next/image";
import React from "react";
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="w-full flex h-[740px] mt-[50px] lg:mt-[60px]">
      <div className="w-full h-full relative">
        <Image
          src={"/ProImages/hero1.webp"}
          alt=""
          fill
          className=" object-cover"
          priority
          quality={100}
        />
        <div className="text-holder text-[white] absolute box-border p-[24px] md:p-[50px] flex flex-col gap-[16px] justify-end inset-0">
          <h1 className="w-[145px] text-[36px] lg:text-[66px] leading-[34px] lg:leading-[64px]">
            The Sustainable Diamond Jewelry.
          </h1>
          <div className="w-fit h-fit">
            <p className="p-[15px_25px] text-[14px] bg-[#0c2e2b] cursor-pointer">
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden md:flex relative">
        <Image
          src={"/ProImages/hero3.webp"}
          alt=""
          fill
          className=" object-cover object-[3.7%_46%]"
          priority
          quality={100}
        />
      </div>
    </div>
  );
};

export default Hero;
