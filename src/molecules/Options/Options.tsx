import Link from "next/link";
import { FC } from "react";

// styles
import { OptionsWrapper, Option, Play } from "./Options.style";

const Options: FC = () => {
  return (
    <OptionsWrapper>
      <Link href="/gacha" passHref>
        <Play>Play</Play>
      </Link>
      <Link href="/inventory" passHref>
        <Option>My emotes</Option>
      </Link>
      <Link href="/info" passHref>
        <Option>Information</Option>
      </Link>
    </OptionsWrapper>
  );
};

export default Options;
