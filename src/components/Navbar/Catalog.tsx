"use client";
import { Categories } from "@/CatalogData";
import {
  CategoryInterface,
  ProductInterface,
} from "@/Interfaces/CatalogInterface";
import { useAppDispatch } from "@/redux/hooks";
import { setNavbarVisibility } from "@/redux/slices/ModalsStateSlice";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
interface CatalogProps {}

interface CategoryBlockProps {
  name: string;
  active?: boolean;
  onClick?: Function;
}
interface ProductBlockProps {
  productData: ProductInterface;
  onClick?: Function;
}

const CategoryBlock: React.FC<CategoryBlockProps> = ({
  name,
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`w-full h-full flex items-center justify-center ${
        active && "bg-[#f2cd88] text-[#0c2e2b]"
      }`}
    >
      <h1>{name}</h1>
    </div>
  );
};
const ProductBlock: React.FC<ProductBlockProps> = ({
  productData,
  onClick,
}) => {
  return (
    <div
      onClick={() => {
        if (onClick) onClick();
      }}
      className="w-full h-[70px] flex items-center justify-between box-border px-4 border-b-[0.5px] border-[#f2cd88]"
    >
      <h1>{productData.name}</h1>
      {productData.types && (
        <MdNavigateNext className="text-xl" color="#f2cd88" />
      )}
    </div>
  );
};
const Catalog: React.FC<CatalogProps> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [activeCategory, setActiveCategory] = useState("Women");
  const [productList, setProductList] = useState<any>(Categories[0].products);

  const onProductClick = (list: any) => {
    if (list) setProductList(list);
    if (!list) {
      dispatch(setNavbarVisibility(false));
    }
  };

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

  const itemAni = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <motion.div className="relative w-full h-full flex flex-col">
      <div className="h-[50px] w-full flex text-[18px]">
        {Categories.map((category: CategoryInterface, index: number) => {
          return (
            <CategoryBlock
              key={category.name}
              name={category.name}
              active={category.name === activeCategory}
              onClick={() => {
                setActiveCategory(category.name);
                if (category.products) setProductList(category.products);
              }}
            />
          );
        })}
      </div>
      <AnimatePresence mode="sync">
        <motion.div
          key={"bigcontainer"}
          className="h-full w-full overflow-auto flex flex-col box-border gap-5"
        >
          <motion.div
            key={"productListContainer_" + activeCategory}
            className="w-full h-fit text-[18px]"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {productList.map((p: ProductInterface) => {
              return (
                <motion.div
                  variants={itemAni}
                  layout
                  key={activeCategory + p.name}
                >
                  <Link
                    href={`/jewelry/${activeCategory.toLowerCase()}/${p.name.toLowerCase()}`}
                  >
                    <ProductBlock
                      key={activeCategory + p.name + "sub"}
                      productData={p}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            layout
            key={"callButtons"}
            className="w-full flex flex-col gap-5 px-4"
          >
            <div className="w-full flex justify-center items-center h-[44px] rounded bg-[#f2cd88] text-[#0c2e2b] ">
              <p>REGISTER</p>
            </div>
            <div className="w-full flex justify-center items-center h-[44px] rounded bg-[#f2cd88] text-[#0c2e2b] ">
              <p>MY WISHLIST</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Catalog;
