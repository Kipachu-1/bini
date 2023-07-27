"use client";
import React from "react";
import { ProductInterface } from "@/Interfaces/ProductInterface";
import { productList } from "@/MockData";
import ProductCarousel from "./Product/ProductCarousel";
interface DesTextProps {}
interface BlockListProps {
  list: ProductInterface[];
}

const DesText: React.FC<DesTextProps> = () => {
  return <ProductCarousel list={productList} name="New Arrivals" />;
};

export default DesText;
