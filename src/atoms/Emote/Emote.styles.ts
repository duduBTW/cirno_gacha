import styled from "@emotion/styled";
import { Rarity } from "../../types/emotes";

interface IEmoteCardWrapper {
  stars: Rarity;
}

export const EmoteCardWrapper = styled.div<IEmoteCardWrapper>`
  width: 100%;
  height: 106px;

  background: #e2f0ff;
  margin-top: 52px;

  padding-left: 11px;

  position: relative;
  box-sizing: border-box;
  border-radius: 12px;

  border: 2px solid;

  border-color: ${({ stars }) => {
    switch (Number(stars)) {
      case 2:
        return "#A3A3A3";

      case 3:
        return "#955757";

      case 4:
        return "#63CCC6";
      case 5:
        return "#FFE845";

      default:
        break;
    }
  }};
`;

export const Stars = styled.div`
  position: absolute;

  right: 10px;
  bottom: 44px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Star = styled.div`
  width: 18px;
  height: 18px;

  background-image: url("/star.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

interface IImage {
  unlocked: boolean;
}

export const Image = styled.img<IImage>`
  margin-top: -52px;
  margin-bottom: 8px;

  height: 110px;
  max-width: 110px;

  object-fit: contain;
  object-position: center center;

  filter: ${({ unlocked }) =>
    unlocked
      ? "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25))"
      : "grayscale(100%) brightness(0.4)"};
`;

export const Name = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  /* identical to box height */

  color: #001853;
`;

export const Key = styled.span`
  font-weight: bold;
`;
