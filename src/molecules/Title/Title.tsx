import { FC } from "react";

// styles
import { TitleCirno, Main, Sub, TitleWrapper } from "./Title.styles";

const Title: FC = () => {
  return (
    <TitleWrapper>
      <Main>
        <TitleCirno>Cirno_TV</TitleCirno> gacha game
      </Main>
      <Sub>
        that ins&apos;t really a game, just the gacha with twitch emotes
      </Sub>
    </TitleWrapper>
  );
};

export default Title;
