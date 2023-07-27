"use client";
import Image from "next/image";
import React from "react";

interface InfoModelProps {}

const InfoModel: React.FC<InfoModelProps> = () => {
  return (
    <div className="Info h-fit md:min-h-[900px] md:p-[50px_0px] z-1000 text-[#0c2e2b] bg-white flex flex-col-reverse md:flex-row overflow-hidden w-full">
      <div className="image-holder relative w-full aspect-square flex md:w-[40%]">
        <Image
          src={"/ProImages/InfoModel.webp"}
          fill
          alt=""
          className=" object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="md:w-[60%] box-border p-[60px_16px] md:p-[60px_60px] bg-[#ffe7ba]">
        <div className="ml-[0px] mr-auto md:max-w-[470px]">
          <h3 className="text-[42px] md:text-[100px] md:leading-[100px]">
            Unearth the beauty of responsibly crafted jewels
          </h3>
          <div className="mt-[24px] md:mt-[40px]">
            <p>
              Experience sustainable luxury at its best with our lab-grown
              diamonds and ethically sourced solid gold. Meticulously created by
              our artisans in Antwerp, each piece is a testament to elegance and
              transparency, allowing you to cherish your jewelry with a clear
              conscience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModel;
