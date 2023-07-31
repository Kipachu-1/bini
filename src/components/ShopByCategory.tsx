import React from "react";
import Image from "next/image";
interface ShopByCategoryProps {}
interface CategoryBlockProps {
  image: string;
  name: string;
  pushToUrl: string;
}
const CategoryBlock: React.FC<CategoryBlockProps> = ({
  name,
  image,
  pushToUrl,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 ">
      <div className="w-full aspect-square relative cursor-pointer duration-300 hover:scale-105 rounded">
        <Image src={image} fill alt="" />
      </div>
      <p className=" cursor-pointer">{name}</p>
    </div>
  );
};

const ShopByCategory: React.FC<ShopByCategoryProps> = () => {
  const categories: CategoryBlockProps[] = [
    {
      name: "Necklaces & Pendants",
      image: "/ProImages/Necklace_op3.webp",
      pushToUrl: "",
    },
    { name: "Rings", image: "/ProImages/Rings.webp", pushToUrl: "" },
    { name: "Earrings", image: "/ProImages/Earrings.webp", pushToUrl: "" },
    { name: "Bracelets", image: "/ProImages/Bracelet.webp", pushToUrl: "" },
    {
      name: "Engagement Rings",
      image: "/ProImages/EngagementRings.webp",
      pushToUrl: "",
    },
  ];
  return (
    <div className="ShopByCategory h-fit box-border p-[20px] md:px-[50px] z-1000 text-black min-h-min bg-white flex flex-col justify-center items-center content-center flex-nowrap overflow-hidden w-full">
      <div className="w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl">Our Collections</h1>
          <p>Brilliant design and unparalleled craftsmanship</p>
        </div>
        <div className="w-full  h-full grid grid-cols-2 md:flex md:gap-5 gap-3">
          {categories.map((item, index) => {
            return (
              <CategoryBlock
                key={item.name + index}
                name={item.name}
                image={item.image}
                pushToUrl={item.pushToUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
