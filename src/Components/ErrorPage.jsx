import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Router } from "next/router";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-[120px] lg:w-[1216px] m-auto">
        <div className="text-[100px] text-[#696A75] flex justify-center">
          Sorry
        </div>
        <div className="text-2xl flex justify-center mb-6 text-[#696A75]">
          We couldn't find that page
        </div>
        <img src="/sad_cat.jpg" alt="" className="m-auto border rounded-xl" />
        <div className="text-[#696A75] flex justify-center my-8">
          Meet the sad kitty
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
