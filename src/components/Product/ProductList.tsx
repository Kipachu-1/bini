"use client";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { ProductInterface } from "@/Interfaces/ProductInterface";
import Link from "next/link";
interface ProductListProps {
  list?: ProductInterface[];
}
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};

const ProductList: React.FC<ProductListProps> = ({ list }) => {
  return (
    <AnimatePresence mode="sync">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full h-full grid grid-cols-2 gap-3 md:grid-cols-4 sm:grid-cols-3"
      >
        {list &&
          list.map((p) => {
            return (
              <motion.div variants={itemAni} key={p.id + "_motion"}>
                <Link href={`/j/${p.id}`}>
                  <ProductCard key={p.id} productData={p} />
                </Link>
              </motion.div>
            );
          })}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductList;
