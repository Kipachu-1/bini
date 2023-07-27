"use client";
import React from "react";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import NewsLetter from "./NewsLetter";
interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      id="footer"
      className={`Footer-7 max-h-[900px] pt-[50px] bg-white  min-h-min pb-[70px] text-center lg:pt-[100px] flex flex-col justify-center items-center content-center flex-nowrap gap-[20px] overflow-hidden w-full ${className}`}
    >
      <NewsLetter />
      <div className="flex gap-2 flex-col text-[32px] items-center justify-center">
        <div>
          <p className="text-[18px] font-[500]">Follow us on</p>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <AiFillInstagram />
          <AiOutlineWhatsApp />
          <BsTelegram className="text-[30px]" />
        </div>
      </div>
      <div>
        <p>© 2023 Luxury Jewelry Store BI~NI. Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
