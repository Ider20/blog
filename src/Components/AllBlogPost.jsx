import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";
import { SearchContextValue } from "../Context/SearchContext";
import { SearchProvider } from "@/Context/SearchContext";

export const AllBlogPost = () => {
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(6);
  const { searchValue, setSearchValue } = useContext(SearchContextValue);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const handleShowMore = () => {
    setShowArticles(showArticles + 3);
  };
  // const searchArticles = articles.filter((article) => {
  //   console.log("Original Search Value:", searchValue);
  //   console.log("Original Article Title:", article.title);

  //   return article.title.toLowerCase() === searchValue.toLowerCase();
  // });
  const searchArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(searchValue);
  console.log(searchArticles, "searchArticles");
  return (
    <div className="lg:w-[1216px] m-auto">
      <div className=" px-[32px] mt-[56px] text-base font-bold mb-7 lg:px-0 lg:mt-0">
        All Blog Post
      </div>
      <ul className="text-sm hidden lg:flex gap-5 font-semibold cursor-pointer mb-12">
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">All</li>
        </Link>
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">
            Design
          </li>
        </Link>
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">
            Travel
          </li>
        </Link>
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">
            Fashion
          </li>
        </Link>
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">
            Technology
          </li>
        </Link>
        <Link href={"./blog"}>
          <li className="hover:text-[#d4a373] ease-in-out duration-200">
            Branding
          </li>
        </Link>
      </ul>
      <div>
        <div className="flex flex-col items-center lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:gap-y-5 lg:p-0">
          {searchArticles.slice(0, showArticles).map((article) => {
            return (
              <>
                <Link href={`/${article.id}`}>
                  <div className="border rounded-xl mb-5 w-[292px] h-[420px] lg:w-[392px] lg:h-[476px] lg:p-4 cursor-pointer lg:mb-0">
                    <img
                      src={
                        article.cover_image
                          ? article.cover_image
                          : "https://picsum.photos/536/354"
                      }
                      alt=""
                      className="object-cover w-90 h-60 rounded-lg"
                    />
                    <div className="px-4 h-[170px] lg:h-[200px] flex flex-col justify-between lg:px-0">
                      <div>
                        <div className="flex flex-wrap gap-2 mt-3 mb-3">
                          {article.tag_list.map((tag) => (
                            <div className=" text-[#4b6bfb] text-xs bg-[#4b6bfb20] py-1 px-2 rounded-lg w-fit ">
                              <p> {tag}</p>
                            </div>
                          ))}
                        </div>
                        <div className="text-2xl font-semibold truncate">
                          {article.title}
                        </div>
                      </div>
                      <div>{article.readable_publish_date}</div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
        <div className="w-[123px] h-[48px] flex justify-center items-center my-[40px] border rounded-lg m-auto lg:my-[100px] hover:shadow-lg cursor-pointer ease-in-out duration-300">
          <button onClick={() => handleShowMore()}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogPost;
