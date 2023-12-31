import React from "react";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div className="w-[1216px] m-auto">
      <div className="text-base font-bold mb-7">Trendding</div>
      <div className="flex gap-6 mb-28">
        <div
          className={`w-[289px] h-[320px] relative`}
          //   style={{ backgroundImage: `url(${articles[1]?.cover_image})` }}
        >
          <img
            src={
              articles[1]?.cover_image
                ? articles[1]?.cover_image
                : "https://picsum.photos/536/354"
            }
            alt=""
            className="absolute w-[289px] h-[320px] object-cover rounded-lg hover:scale-105 ease-in-out duration-300"
          />
          <div className="cursor-pointer">
            <div className="absolute px-7 mt-[200px]">
              <div className="flex flex-wrap gap-1">
                {articles[1]?.tag_list.map((tag) => (
                  <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md mb-4">
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
        <div className="w-[289px] h-[320px] relative ">
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
                  <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md mb-4">
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
        <div className="w-[289px] h-[320px] relative">
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
                  <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md mb-4">
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
                  <div className=" bg-[#4B6BFB] text-xs text-white px-2 py-1 w-fit rounded-md mb-4">
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
      </div>
    </div>
  );
};

export default Trending;
