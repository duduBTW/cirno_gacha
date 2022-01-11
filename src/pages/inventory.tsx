// types
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

// components
import InventoryTemplate from "../templates/Inventory/InventoryTemplate";

const Inventory: NextPage = () => {
  return (
    <>
      <NextSeo title="CirnoTV gacha" description="My emotes" />
      <InventoryTemplate />
    </>
  );
};

export default Inventory;
