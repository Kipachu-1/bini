import React from "react";
import { ProductInterface } from "@/Interfaces/ProductInterface";
import Image from "next/image";
interface ProductCardProps {
  productData: ProductInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ productData }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full aspect-square relative">
        <Image
          src={productData.image}
          fill
          quality={100}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="flex justify-start items-left flex-col box-border p-1">
        <h1>{productData.name}</h1>
        <p className="text-[14px] text-[#ddc786]">${productData.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
