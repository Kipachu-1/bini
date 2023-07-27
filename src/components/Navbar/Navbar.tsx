"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
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
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
interface NavbarProps {
  logoNameVisible?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ logoNameVisible = true }) => {
  const dispatch = useAppDispatch();
  const visible = useAppSelector(selectNavbarVisibility);
  const visibleScroll = useAppSelector(selectNavbarVisibilityScroll);
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
            initial={{ top: "-70px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-70px" }}
            transition={{ duration: 0.6, type: "tween" }}
            className="fixed h-[50px] lg:h-[70px] w-full right-0 left-0 z-50 box-border justify-center flex overflow-hidden text-[#f2cd88] bg-[#0c2e2b] border-b border-[#f2cd88]"
          >
            <div className="flex relative justify-between items-center w-full p-[10px_20px] max-w-[1800px]">
              <RxHamburgerMenu
                className="text-2xl h-9 cursor-pointer z-10 lg:hidden"
                onClick={onMenuClick}
              />
              <div className="relative aspect-square w-9 hidden lg:flex cursor-pointer z-10">
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
                <BiSearch className="text-[22px] cursor-pointer" />
                <FaRegUser className="text-[22px] cursor-pointer" />
                <BsHandbag className="text-[22px] cursor-pointer" />
              </div>
              <div className=" absolute inset-0 flex justify-center items-center text-[14px]">
                {logoNameVisible && (
                  <Link href={"/"}>
                    <p className="sm:hidden">BI~NI</p>
                  </Link>
                )}
                <div className="hidden sm:flex gap-7">
                  <div className="hidden lg:flex gap-[20px]">
                    <p className=" cursor-pointer">Кольца</p>
                    <p className=" cursor-pointer">Серьги</p>
                    <p className=" cursor-pointer">Цепи</p>
                  </div>
                  <div className="text-center hidden sm:flex gap-[20px]">
                    <p className=" cursor-pointer">Акции</p>
                    <p className=" cursor-pointer">Новинки</p>
                    <p className=" cursor-pointer">Скидки</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div className="fixed top-0 bottom-0 w-full  text-[#f2cd88] z-[1000]">
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
