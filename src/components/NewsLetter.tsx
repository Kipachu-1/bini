"use client";
import { TextField, styled } from "@mui/material";
import React from "react";

interface NewsLetterProps {}

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#0c2e2b",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0c2e2b",
    borderRadius: "0px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0c2e2b",
      borderRadius: "0px",
    },
    "&:hover fieldset": {
      borderColor: "#0c2e2b",
      borderRadius: "0px",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#0c2e2b",
      borderRadius: "0px",
    },
  },
});

const NewsLetter: React.FC<NewsLetterProps> = () => {
  return (
    <div className="newsletter p-[50px_10px] text-[#0c2e2b] min-h-min bg-[#ffe7ba] flex flex-col gap-7 justify-center items-center content-center flex-nowrap overflow-hidden w-full">
      <div className="text-center">
        <h1 className="text-[26px]">Newsletter</h1>
        <p className="text-[18px] mt-3">
          Subscribe to the Newsletter and stay up-to-date
        </p>
      </div>
      <div className="flex w-full flex-col gap-y-[20px] md:flex-row max-w-[600px]">
        <CssTextField label="Email" variant="outlined" className="flex w-full"/>
        <div className="h-[50px] w-full md:w-fit min-w-fit cursor-pointer flex md:h-auto box-border p-[4px_20px] bg-[#0c2e2b] text-[#ffe7ba] justify-center items-center">
          <p>Join the Club</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
