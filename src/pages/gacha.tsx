// types
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

// components
import GachaTemplate from "../templates/Gacha/GachaTemplate";

const Gacha: NextPage = () => {
  return (
    <>
      <NextSeo title="CirnoTV gacha" description="Gacha" />
      <GachaTemplate />
    </>
  );
};

export default Gacha;
