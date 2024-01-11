import React from "react";
import { LeftArrow } from "./Icons/LeftArrow";
import { RightaArrow } from "./Icons/RightaArrow";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-[1216px] flex m-auto justify-between py-8 items-center mb-10">
      <div>
        <Link href={"http://https://blog-azure-ten-88.vercel.app/"}>
          <img
            src="/Logo.png"
            alt=""
            className="w-[158px] h-9 cursor-pointer"
          />
        </Link>
      </div>
      <ul className="flex gap-10">
        <Link href={"http://https://blog-azure-ten-88.vercel.app/"}>
          <li className="hover:text-[#d4a373] active:scale-95 ease-out duration-300">
            Home
          </li>
        </Link>
        <Link href={"/blog"}>
          <li className="hover:text-[#d4a373] active:scale-95 ease-out duration-300">
            Blog
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className="hover:text-[#d4a373] active:scale-95 ease-out duration-300">
            Contact
          </li>
        </Link>
      </ul>
      <input
        placeholder="Search"
        type="text"
        name=""
        id=""
        className="border rounded-lg p-1"
      />
    </div>
  );
};

export default Header;
