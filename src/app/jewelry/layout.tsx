import JewelryFilterBar from "@/components/FilterBars/JewelryFilterBar";
import Footer from "@/components/Footer";

export default function JewelryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden h-auto min-h-full box-border px-[20px] pt-[110px] lg:pt-[140px] bg-[white] flex justify-center">
      <JewelryFilterBar />
      {children}
    </div>
  );
}
