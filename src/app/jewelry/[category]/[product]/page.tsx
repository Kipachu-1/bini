import { productList } from "@/MockData";
import ProductList from "@/components/Product/ProductList";
export default function Page({ params }: { params: {} }) {
  return (
    <div className="w-full h-fit text-[#0c2e2b] max-w-[1440px] overflow-hidden overscroll-none">
      <ProductList list={productList} />
    </div>
  );
}
