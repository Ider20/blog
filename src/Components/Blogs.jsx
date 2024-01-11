import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [showArticles, setShowArticles] = useState(6);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const handleShowMore = () => {
    setShowArticles(showArticles + 3);
  };

  return (
    <div>
      <Header />
      <div className="w-[1216px] m-auto">
        <div className="text-2xl font-bold mb-10">All Blog Post</div>
        <div className="flex flex-wrap justify-between gap-y-5">
          {articles.slice(0, showArticles).map((article) => {
            return (
              <>
                <Link href={`/${article.id}`}>
                  <div className="border rounded-xl w-[392px] h-[476px] p-4 cursor-pointer">
                    <img
                      src={
                        article.cover_image
                          ? article.cover_image
                          : "https://picsum.photos/536/354"
                      }
                      alt=""
                      className="object-cover w-90 h-60 rounded-lg"
                    />
                    <div className="h-[200px] flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mt-3 mb-3">
                          {article.tag_list.map((tag) => (
                            <div className=" text-[#4b6bfb] text-xs bg-[#4b6bfb20] py-1 px-2 rounded-lg w-fit ">
                              <p> {tag}</p>
                            </div>
                          ))}
                        </div>
                        <div className="text-2xl font-semibold">
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
        <div className="w-[123px] h-[48px] flex justify-center items-center border rounded-lg m-auto my-[100px] hover:shadow-lg cursor-pointer ease-in-out duration-300">
          <button onClick={() => handleShowMore()}>Load More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
