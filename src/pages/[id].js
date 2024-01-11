import React, { useEffect } from "react";
import { useState } from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { useRouter } from "next/router";

export const ArticleDetail = () => {
  const { query } = useRouter();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles");
        const data = await response.json();
        setFilteredArticles(
          data.filter((article) => article.id === parseInt(query.id))
        );
      } catch (error) {
        console.err(error);
      }
    };
    if (query?.id) {
      fetchArticles();
    }
  }, [query?.id]);
  // useEffect(() => {
  //   fetch("https://dev.to/api/articles")
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // }, []);

  console.log(filteredArticles, "articles", "==", query?.id, "router.id");
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {filteredArticles.map((article) => {
          return (
            <div className="w-[800px] m-auto">
              <div className="text-2xl font-bold mb-4">
                {article.description}
              </div>
              <div className="flex gap-3 mb-4 items-center">
                <img
                  src={article.user.profile_image}
                  className="w-9 rounded-full"
                />
                <div className="text-[#696a75] text-sm">
                  {article.user.name}
                </div>
                <div className="text-[#696a75] text-sm">
                  {article.readable_publish_date}
                </div>
              </div>

              <img src={article.cover_image} className="mb-8" />
              <p className="mb-8">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <p className="text-xl font-bold mb-8">What is Lorem Ipsum?</p>
              <p className="mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-xl font-bold mb-8">Why do we use it?</p>
              <p className="mb-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
