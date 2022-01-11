import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Rarity } from "../../types/emotes";

export const ChatMessageContainer = styled(motion.div)`
  display: flex;
`;

export const Badge = styled.img`
  width: 18px;
  height: 18px;

  margin-right: 14px;
  align-self: center;
`;

interface IUser {
  stars: Rarity;
}

export const User = styled.div<IUser>`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;

  letter-spacing: 0.07em;

  color: ${({ stars }) => {
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

export const Message = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
  /* identical to box height */

  letter-spacing: 0.07em;

  color: #ffffff;
`;
