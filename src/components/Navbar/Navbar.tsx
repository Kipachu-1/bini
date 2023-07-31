"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectNavbarVisibility,
  selectNavbarVisibilityScroll,
  setNavbarVisibility,
  setNavbarVisibilityScroll,
} from "@/redux/slices/ModalsStateSlice";
import Catalog from "./Catalog";
import { RxTriangleDown } from "react-icons/rx";
import Link from "next/link";
import SelectFilter from "../FilterBars/SelectFilter";
interface NavbarProps {
  logoNameVisible?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logoNameVisible = true }) => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(selectNavbarVisibility);
  const visibleScroll = useAppSelector(selectNavbarVisibilityScroll);
  const [collOpen, setCollOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [currCat, setCurrCat] = useState("Women");

  const [prevScrollY, setPrevScrollY] = useState(0);

  const onMenuClick = () => {
    dispatch(setNavbarVisibility(true));
  };
  const hideNavbar = () => {
    dispatch(setNavbarVisibility(false));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.location.href.includes("/j/")) {
        dispatch(setNavbarVisibilityScroll(true));
        return;
      }
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY - prevScrollY > 20) {
        setCollOpen(false);
        dispatch(setNavbarVisibilityScroll(false));
        setPrevScrollY(currentScrollY);
      } else if (
        currentScrollY < prevScrollY &&
        prevScrollY - currentScrollY > 20
      ) {
        dispatch(setNavbarVisibilityScroll(true));
        setPrevScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    if (!visible) document.body.style.overflow = "visible";
  }, [visible]);
  return (
    <>
      <AnimatePresence>
        {visibleScroll && (
          <motion.div
            initial={{ top: "0px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-70px" }}
            transition={{ duration: 0.6, type: "tween" }}
            className="fixed h-[50px] lg:h-[70px] w-full right-0 left-0 z-[10000] box-border justify-center flex text-[#f2cd88] bg-[#0c2e2b] border-b border-[#f2cd88]"
          >
            <div className="flex relative justify-between items-center w-full p-[10px_20px] max-w-[1800px]">
              <div className="flex gap-[16px] items-center md:hidden z-[50]">
                <HiOutlineMenuAlt2
                  className="text-3xl h-9 cursor-pointer z-10 "
                  onClick={onMenuClick}
                />
                <Link href={"/"}>
                  <p className="text-[18px]">BI~NI</p>
                </Link>
              </div>

              <div className="relative aspect-square w-9 hidden md:flex cursor-pointer z-10">
                <Link href={"/"}>
                  <Image
                    src={"/biniLogoNoName.svg"}
                    alt=""
                    fill
                    style={{
                      filter:
                        "invert(87%) sepia(82%) saturate(2066%) hue-rotate(304deg) brightness(116%) contrast(90%)",
                      marginTop: "5px",
                      objectFit: "cover",
                      scale: "1.6",
                    }}
                  />
                </Link>
              </div>
              <div className="flex gap-2 justify-center items-center z-10">
                <FaRegUser className="text-[22px] cursor-pointer" />
                <BsHandbag className="text-[22px] cursor-pointer" />
              </div>
              <div className=" absolute inset-0 flex justify-center items-center text-[14px]">
                <div className="hidden sm:flex gap-7">
                  <div className="hidden md:flex gap-[10px] lg:gap-[20px]">
                    <div
                      onClick={() => {
                        setCatOpen(!catOpen);
                      }}
                      className="w-[110px] h-[34px] flex justify-center gap-x-1 cursor-pointer items-center border-[2px] rounded-[16px] border-[#f2cd88] relative"
                    >
                      <p className=" cursor-pointer">{currCat}</p>
                      <RxTriangleDown />
                      {catOpen && (
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="absolute top-[40px] overflow-hidden text-left border-[#f2cd88] border-[2px] right-0 left-0 w-full bg-[#0c2e2b] rounded-[8px] flex flex-col justify-center items-center box-border p-[10px_0px]"
                        >
                          <p
                            className="w-full p-[6px_20px]"
                            onClick={() => {
                              setCurrCat("Women");
                            }}
                          >
                            Women
                          </p>
                          <p
                            className="w-full p-[6px_20px]"
                            onClick={() => {
                              setCurrCat("Men");
                            }}
                          >
                            Men
                          </p>
                          <p
                            className="w-full p-[6px_20px]"
                            onClick={() => {
                              setCurrCat("Kids");
                            }}
                          >
                            Kids
                          </p>
                        </motion.div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setCollOpen(!collOpen);
                      }}
                      className="w-[200px] h-[34px] flex gap-x-1 justify-center cursor-pointer items-center border-[2px] rounded-[16px] relative border-[#f2cd88]"
                    >
                      <p className=" cursor-pointer">Collections</p>
                      <RxTriangleDown />
                      {collOpen && (
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.5, type: "spring" }}
                          className="absolute top-[40px] overflow-hidden text-left border-[#f2cd88] border-[2px] right-0 left-0 w-full bg-[#0c2e2b] rounded-[8px] flex flex-col justify-center items-center box-border p-[10px_0px]"
                        >
                          <Link
                            href={`/jewelry/${currCat.toLowerCase()}/rings`}
                          >
                            <p className="w-full p-[6px_20px] ">Rings</p>
                          </Link>
                          <Link
                            href={`/jewelry/${currCat.toLowerCase()}/earings`}
                          >
                            <p className="w-full p-[6px_20px] ">Earings</p>
                          </Link>
                          <Link
                            href={`/jewelry/${currCat.toLowerCase()}/necklaces`}
                          >
                            <p className="w-full p-[6px_20px] ">Necklaces</p>
                          </Link>
                          <Link
                            href={`/jewelry/${currCat.toLowerCase()}/bracelets`}
                          >
                            <p className="w-full p-[6px_20px] ">Bracelets</p>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                    <div className="w-[150px] h-[34px] flex justify-center cursor-pointer items-center border-[2px] rounded-[12px] border-[#f2cd88]">
                      <p className=" cursor-pointer ">New Arrivals</p>
                    </div>
                    <div className="w-[130px] h-[34px] flex justify-center cursor-pointer items-center border-[2px] rounded-[12px] border-[#f2cd88]">
                      <BiSearch className="text-[22px] cursor-pointer" />
                      <p className=" cursor-pointer ">Search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div className="fixed top-0 bottom-0 w-full  text-[#f2cd88] z-[10000]">
            <motion.div className="relative w-full h-full ">
              <motion.div
                className="w-[300px] absolute h-full bg-[#0c2e2b] z-[100]"
                initial={{ left: "-100%" }}
                animate={{ left: "0%" }}
                exit={{ left: "-100%" }}
                transition={{ duration: 0.3 }}
              >
                <Catalog />
              </motion.div>
              <motion.div
                onClick={hideNavbar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className=" absolute inset-0 bg-[#00000038] z-[10]"
              ></motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
