import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Trending = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div className="flex flex-col  w-[375px] px-[32px] pt-[100px] lg:pt-0 lg:w-[1216px] lg:m-auto lg:p-0 lg:mt-0">
      <div className="text-base font-bold mb-7">Trendding</div>

      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:flex lg:gap-6 lg:mb-28">
        <Link href={`/${articles[1]?.id}`}>
          {" "}
          <div
            className={`mb-[41px] w-[289px] h-[320px] relative`}
            //   style={{ backgroundImage: `url(${articles[1]?.cover_image})` }}
          >
            <img
              src={
                articles[1]?.cover_image
                  ? articles[1]?.cover_image
                  : "https://picsum.photos/536/354"
              }
              alt=""
              className="absolute w-[289px] h-[320px] object-cover rounded-lg hover:scale-105 ease-in-out duration-300 cursor-pointer"
            />
            <div className="cursor-pointer">
              <div className="absolute px-7 mt-[200px]">
                <div className="flex flex-wrap gap-1">
                  {articles[1]?.tag_list.map((tag) => (
                    <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md ">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="txt text-lg text-white font-semibold h-[50px] overflow-hidden">
                  {articles[1]?.title}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${articles[2]?.id}`}>
          {" "}
          <div className="hidden lg:flex w-[289px] h-[320px] relative ">
            {" "}
            <img
              src={
                articles[2]?.cover_image
                  ? articles[2]?.cover_image
                  : "https://picsum.photos/536/354"
              }
              alt=""
              className=" rounded-lg absolute hover:scale-105 ease-in-out duration-300 cursor-pointer w-[289px] h-[320px] object-cover"
            />
            <div className="cursor-pointer">
              <div className="absolute px-7 mt-[200px]">
                <div className="flex flex-wrap gap-1">
                  {articles[2]?.tag_list.map((tag) => (
                    <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="txt text-lg text-white font-semibold h-[50px] overflow-hidden">
                  {articles[2]?.title}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${articles[3]?.id}`}>
          {" "}
          <div className="hidden lg:flex w-[289px] h-[320px] relative">
            {" "}
            <img
              src={
                articles[3]?.cover_image
                  ? articles[3]?.cover_image
                  : "https://picsum.photos/536/354"
              }
              alt=""
              className="absolute rounded-lg hover:scale-105 ease-in-out duration-300 cursor-pointer w-[289px] h-[320px] object-cover"
            />
            <div className="cursor-pointer">
              <div className="absolute px-7 mt-[200px]">
                <div className="flex flex-wrap gap-1">
                  {articles[3]?.tag_list.map((tag) => (
                    <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="txt text-lg text-white font-semibold h-[50px] overflow-hidden">
                  {articles[3]?.title}
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/${articles[4]?.id}`}>
          {" "}
          <div className="w-[289px] h-[320px] relative">
            {" "}
            <img
              src={
                articles[4]?.cover_image
                  ? articles[4]?.cover_image
                  : "https://picsum.photos/536/354"
              }
              alt=""
              className="absolute  rounded-lg hover:scale-105 ease-in-out duration-300 cursor-pointer w-[289px] h-[320px] object-cover"
            />
            <div className="cursor-pointer">
              <div className="absolute px-7 mt-[200px]">
                <div className="flex flex-wrap gap-1">
                  {articles[4]?.tag_list.map((tag) => (
                    <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
                <div className="txt text-lg text-white font-semibold h-[50px] overflow-hidden">
                  {articles[4]?.title}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Trending;
