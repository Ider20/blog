import React from "react";
import { FaceBook } from "../Components/Icons/FaceBook";
import { Twitter } from "../Components/Icons/Twitter";
import { Insta } from "../Components/Icons/Insta";
import { LinkDen } from "../Components/Icons/LinkDen";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#f6f6f7] h-[496px]">
      <div>
        <div className="flex w-[1216px] m-auto gap-5 pt-[64px] mb-[25px]">
          <div className="w-[280px]">
            <div className="mb-[12px] font-semibold text-lg">About</div>
            <div className="mb-[24px] text-[#696a75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
            <div className="text-[#181a2a]">
              <div>Email : info@jstemplate.net</div>
              <div>Phone : 880 123 456 789</div>
            </div>
          </div>
          <div className="w-[521px] flex justify-center">
            <ul>
              <Link href={"http://https://blog-azure-ten-88.vercel.app/"}>
                <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black ease-in-out duration-300">
                  Home
                </li>
              </Link>
              <Link href={"/blog"}>
                <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black ease-in-out duration-300">
                  Blog
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black ease-in-out duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-[26.6px] h-2">
            <Link href={"/nopage"}>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-200">
                <FaceBook />
              </div>
            </Link>
            <Link href={"/nopage"}>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-200">
                <Twitter />
              </div>
            </Link>

            <Link href={"/nopage"}>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-200">
                <Insta />
              </div>
            </Link>

            <Link href={"/nopage"}>
              <div className="cursor-pointer hover:scale-125 ease-in-out duration-200">
                <LinkDen />
              </div>
            </Link>
          </div>
        </div>
        <hr className="w-[1216px] m-auto" />
        <div className="w-[1216px] flex m-auto justify-between mt-[32px] ">
          <Link href={"http://blog-azure-ten-88.vercel.app/"}>
            <img src="/BottomLogo.png" alt="" className="w-[230px] h-[64px]" />
          </Link>
          <div className="flex gap-4 text-[#3b3c4a] items-center">
            <Link href={"/nopage"}>
              <p className="cursor-pointer hover:text-[#d4a373] ease-in-out duration-200">
                Terms of Use
              </p>
            </Link>

            <div className="h-5 w-[0.2px] border-l border-[#e8e8ea]"></div>
            <Link href={"/nopage"}>
              <p className="cursor-pointer hover:text-[#d4a373] ease-in-out duration-200">
                Privacy Policy
              </p>
            </Link>

            <div className="h-5 w-[0.2px] border-l border-[#e8e8ea]"></div>
            <Link href={"/nopage"}>
              <p className="cursor-pointer hover:text-[#d4a373] ease-in-out duration-200">
                Coockie Policy
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
