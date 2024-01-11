import React, { useState } from "react";

import Link from "next/link";
import { useContext } from "react";
import { SearchContextValue } from "@/Context/SearchContext";

export const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);
  // console.log(searchValue, "searchVlaue");
  return (
    <div className="w-[1216px] flex m-auto justify-between py-8 items-center mb-10">
      <div>
        <Link href={"http://blog-azure-ten-88.vercel.app/"}>
          <img
            src="/Logo.png"
            alt=""
            className="w-[158px] h-9 cursor-pointer"
          />
        </Link>
      </div>
      <ul className="flex gap-10">
        <Link href={"http://blog-azure-ten-88.vercel.app/"}>
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
      <div className="flex ">
        <input
          placeholder="Search"
          type="text"
          name=""
          id=""
          className="p-1 pl-3 border rounded-lg bg-[#F4F4F5] text-sm"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="absolute ml-[150px] mt-[3px]">
          <i
            // <i class="fa-thin fa-magnifying-glass" style="color: #ababab;"></i>
            class="fa-solid fa-magnifying-glass"
            style={{ color: "#ababab" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
