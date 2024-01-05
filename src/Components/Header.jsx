import React from "react";
import { LeftArrow } from "./Icons/LeftArrow";
import { RightaArrow } from "./Icons/RightaArrow";

export const Header = () => {
  return (
    <div className="w-[1216px] flex m-auto justify-between py-8 items-center">
      <div>
        <img src="/Logo.png" alt="" className="w-[158px] h-9" />
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <input
        placeholder="Search"
        type="text"
        name=""
        id=""
        className="border rounded-lg"
      />
    </div>
  );
};

export default Header;
