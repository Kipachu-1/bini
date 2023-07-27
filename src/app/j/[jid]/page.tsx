import { productList } from "@/MockData";
import { AnimateChangeInHeight } from "@/components/Animate/AnimateChangeInHeight";
import ImageGallery from "@/components/Product/ImageGallery";
import ToggleHeading from "@/components/Product/ToggleHeading";
import { useAppDispatch } from "@/redux/hooks";

export default function JewelryPage({ params }: { params: { jid: string } }) {
  return (
    <div className="w-full h-full box-border md:px-[16px] gap-x-[60px] max-w-[1800px] flex flex-col md:flex-row text-[#0c2e2b]">
      <div className="w-full flex">
        <ImageGallery
          images={productList.slice(0, 6).map((item) => {
            return item.image;
          })}
        />
      </div>
      <div className="w-full md:max-w-[450px] md:mt-[20px]">
        <div className="flex w-full h-[60px] flex-col justify-center box-border px-[16px] border-b-[1px] border-[#f2cd88]">
          <p className="text-[18px] font-[600] md:text-[24px]">BLack Glamour</p>
        </div>
        <div className="fixed md:relative md:my-[16px] h-[45px]  bottom-0 left-0 right-0 flex flex-col z-[5000]">
          <div className="flex justify-center w-full h-[55px] items-center bg-[#0c2e2b] text-[#f2cd88] text-[16px]">
            <p>ADD TO BAG - $254</p>
          </div>
        </div>
        <div className="w-full min-h-[50px] h-fit flex box-border p-[26px] md:p-[40px] text-[14px] md:text-[15px] bg-[#ffe7ba]">
          <p>
            The perfect pairing for the biggest diamond lovers out there. Wear
            this stack and you will mesmerize many.
          </p>
        </div>
        <ToggleHeading name="Details" initial>
          <div className="w-full box-border px-[24px] py-[16px] text-[14px]">
            <div className="w-full mb-3">
              <h1 className=" mb-2 font-semibold">Diamond Stud</h1>
              <div className="flex w-full mb-2">
                <p className="w-[140px]">Measurements:</p>
                <p>4.00 - 4.10mm</p>
              </div>
              <div className="flex w-full mb-2">
                <p className="w-[140px]">Diamond:</p>
                <p>
                  Carat: 0.10tcw
                  <br />
                  Color: D-G
                  <br />
                  Clarity: VS+
                  <br />
                  Cut: excellent
                </p>
              </div>
              <div className="flex w-full  mb-2">
                <p className="w-[140px]">Solid Gold:</p>
                <p>
                  Metal:Solid 14k gold
                  <br />
                  Weight:0.40 gr
                </p>
              </div>
            </div>
            <div className="w-full mb-3">
              <h1 className=" mb-2 font-semibold">Jade</h1>
              <div className="flex w-full mb-2">
                <p className="w-[140px]">Measurements:</p>
                <p>15.60 x 4.68mm</p>
              </div>
              <div className="flex w-full mb-2">
                <p className="w-[140px]">Diamond:</p>
                <p>
                  Carat: 0.15tcw
                  <br />
                  Color: D-G
                  <br />
                  Clarity: VS+
                  <br />
                  Cut: excellent
                </p>
              </div>
              <div className="flex w-full  mb-2">
                <p className="w-[140px]">Solid Gold:</p>
                <p>
                  Metal:Solid 14k gold
                  <br />
                  Weight:0.65 gr
                </p>
              </div>
            </div>
          </div>
        </ToggleHeading>
        <ToggleHeading name="Delivery & Free returns">
          <div className="w-full px-[24px] py-[16px] box-border text-[14px]">
            <p>
              All orders are shipped worldwide via our affiliate couriers DHL or
              UPS. Please see the shipping method as well as shipping costs and
              delivery times for your destination here.
            </p>
            <br />
            <p>
              We gladly accept returns within 30 days of receipt free of charge.
              For more information, please read here.
            </p>
          </div>
        </ToggleHeading>
      </div>
    </div>
  );
}
