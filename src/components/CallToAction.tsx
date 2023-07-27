'use client';
import Image from "next/image";
interface CallToActionProps {}

const CallToAction: React.FC<CallToActionProps> = () => {
  return (
    <div className="Call_To_Action-4 z-50 relative max-h-[900px] p-[60px_20px] md:p-[100px_50px] xl:p-[100px] text-[black] min-h-min bg-white flex justify-center items-center overflow-hidden w-full">
      <div className="max-w-[1000px] flex flex-col gap-[20px] items-center w-full h-fit">
        <Image src={"/notStar.svg"} width={200} height={200} alt="" />
        <p className="text-[30px]  md:text-[50px]">
          Готовы к ослепительному блеску?
        </p>
        <p className="text-[16px] max-w-[400px] text-center leading-6">
          Сделайте первый шаг к обладанию роскошными украшениями, о которых вы
          всегда мечтали. Познакомьтесь с нашими пленительными коллекциями и
          позвольте своей истории сиять.
        </p>
        <div className="Call_To_Buy_Button cursor-pointer md:w-fit w-full bg-[#c08497] flex justify-center items-center p-[10px] rounded-[10px]">
          Купить сейчас
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
