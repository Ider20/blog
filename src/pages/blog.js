import React from "react";
import { useRouter } from "next/router";
import { Blogs } from "../Components/Blogs";

const Blog = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default Blog;
