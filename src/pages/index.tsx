// types
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

// components
import HomeTemplate from "../templates/Home";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="CirnoTV gacha" description="Home" />
      <HomeTemplate />
    </>
  );
};

export default Home;
