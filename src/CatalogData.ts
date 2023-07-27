import {
  CategoryInterface,
  ProductInterface,
} from "./Interfaces/CatalogInterface";

const WomenProducts: ProductInterface[] = [
  { name: "Earings" },
  { name: "Necklaces" },
  { name: "Rings" },
  { name: "Bracelets" },
];

const MenProducts: ProductInterface[] = [
  { name: "Wathces" },
  { name: "Necklaces" },
  { name: "Rings" },
];

const KidsProducts: ProductInterface[] = [];

export const Categories: CategoryInterface[] = [
  {
    name: "Women",
    products: WomenProducts,
  },
  {
    name: "Men",
    products: MenProducts,
  },
  { name: "Kids", products: KidsProducts },
];
