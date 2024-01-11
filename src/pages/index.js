import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "../Components/Header";
import { SlideNews } from "../Components/SlideNews";
import { Trending } from "../Components/Trending";
import { AllBlogPost } from "../Components/AllBlogPost";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { SearchContextValue } from "@/Context/SearchContext";
import { SearchProvider } from "@/Context/SearchContext";

const inter = Inter({ subsets: ["latin"] });
// const { searchValue, setSearchValue } = useContext(SearchContextValue);
export default function Home() {
  return (
    <>
      <Header />
      <SlideNews />
      <Trending />
      <AllBlogPost />
      <Footer />
    </>
  );
}
