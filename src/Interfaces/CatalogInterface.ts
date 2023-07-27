export interface CategoryInterface {
  name: string;
  products?: ProductInterface[];
}
export interface ProductInterface {
  name: string;
  types?: string[];
}
