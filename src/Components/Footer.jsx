import React from "react";
import { FaceBook } from "../Components/Icons/FaceBook";
import { Twitter } from "../Components/Icons/Twitter";
import { Insta } from "../Components/Icons/Insta";
import { LinkDen } from "../Components/Icons/LinkDen";

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
              <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black">
                Home
              </li>
              <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black">
                Blog
              </li>
              <li className="mb-2 cursor-pointer text-[#696a75] hover:text-black">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex gap-[26.6px] h-2">
            <div className="cursor-pointer">
              <FaceBook />
            </div>
            <div className="cursor-pointer">
              <Twitter />
            </div>
            <div className="cursor-pointer">
              <Insta />
            </div>
            <div className="cursor-pointer">
              <LinkDen />
            </div>
          </div>
        </div>
        <hr className="w-[1216px] m-auto" />
        <div className="w-[1216px] flex m-auto justify-between mt-[32px]">
          <img src="/BottomLogo.png" alt="" className="w-[230px] h-[64px]" />
          <div>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Coockie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
