import React from "react";
import { useEffect, useState } from "react";
import { LeftArrow } from "../Components/Icons/LeftArrow";
import { RightaArrow } from "../Components/Icons/RightaArrow";

export const SlideNews = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  const [index, setIndex] = useState(0);
  var article = articles[index];
  function rigthClick() {
    setIndex(index + 1);
  }
  function leftClick() {
    if (index <= 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div className="lg:pt-[180px]">
      <div className="hidden lg:flex lg:flex-col lg: lg:w-[1216px] lg:m-auto ">
        <div className="relative">
          <img
            src={
              article?.cover_image
                ? article.cover_image
                : "https://picsum.photos/536/354"
            }
            alt=""
            className="w-full h-[600px] mb-[11px] rounded-xl absolute ease-in-out duration-300"
          />
          <div className="w-[598px] h-[252px] rounded-xl p-10 ml-[11px] bg-white absolute mt-[335px]">
            <div className="flex flex-wrap gap-1">
              {article?.tag_list.map((tag) => (
                <div className="bg-[#4B6BFB] rounded-md px-2.5 py-1 w-fit h-7 text-sm text-white mb-4">
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between h-[140px]">
              <div className="text-4xl font-semibold text-[#181A2A] mb-6c">
                {article?.title}
              </div>
              <div className="text-sm text-[#97989F]">
                {article?.readable_publish_date}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-[611px] justify-end mb-[100px]">
          <div
            onClick={leftClick}
            className="border px-2 py-2 border-[#696a75] w-8 rounded-lg cursor-pointer"
          >
            <LeftArrow />
          </div>
          <div
            onClick={rigthClick}
            className="border px-3 py-2 border-[#696a75] w-8 rounded-lg cursor-pointer"
          >
            <RightaArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideNews;
