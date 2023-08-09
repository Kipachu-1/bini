import { Button } from "@mui/material";
import Image from "next/image";

interface ModelShowProps {}

const ModelShow: React.FC<ModelShowProps> = () => {
  return (
    <div className="z-100 section-2-bg relative box-border p-[40px_0px] sm:p-[10px] md:p-[50px] text-black min-h-min bg-white flex flex-col md:flex-row justify-center items-center flex-nowrap overflow-hidden w-full md:gap-x-[20px] lg:gap-x-[80px] gap-y-7 text-xl">
      <div className="z-10 w-fit h-full relative flex flex-col text-left md:text-center items-center justify-start">
        <Image
          src={"/ProImages/asian.webp"}
          width={600}
          height={600}
          quality={100}
          alt=""
          priority
        />
        <p className="w-[400px] mt-3">
          Stay trendy with our chic jewelry designs.
        </p>
        <div className="w-full flex justify-start px-4 sm:justify-center">
          <Button
            size="small"
            variant="outlined"
            sx={{
              padding: "10px 20px",
              borderColor: "black",
              color: "black", // Set initial text color
              "&:hover": {
                color: "black", // Change text color on hover
              },
            }}
            className="rounded hover:bg-transparent mt-1"
          >
            Shop
          </Button>
        </div>
      </div>
      <div className="z-10 w-fit h-full relative flex flex-col text-left md:text-center items-center">
        <Image
          src={"/ProImages/latina.webp"}
          width={600}
          height={600}
          quality={100}
          alt=""
          priority
        />
        <p className="w-[400px] mt-3">Embrace luxury, make a statement.</p>
        <div className="w-full flex justify-start box-border px-4 sm:justify-center">
          <Button
            size="small"
            variant="outlined"
            sx={{
              padding: "10px 20px",
              borderColor: "black",
              color: "black", // Set initial text color
              "&:hover": {
                color: "black", // Change text color on hover
              },
            }}
            className="rounded hover:bg-transparent mt-1"
          >
            Shop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelShow;
