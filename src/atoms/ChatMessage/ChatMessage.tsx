import { FC } from "react";
import { Variants } from "framer-motion";
import { IEmote, Rarity } from "../../types/emotes";

// styles
import {
  Badge,
  ChatMessageContainer,
  User,
  Message,
} from "./ChatMessage.styles";

interface Props {
  emote: IEmote;
  index: number;
}

const item: Variants = {
  animate: {
    opacity: 1,
    x: 0,
  },
  initial: { opacity: 0, x: 100 },
};

const getMessage = (rarity: Rarity) => {
  switch (Number(rarity)) {
    case 2:
      return "Rare sadge";

    case 3:
      return "SR nice";

    case 4:
      return "SRR pog";

    case 5:
      return "UR POGGERS";

    default:
      return "";
  }
};

const ChatMessage: FC<Props> = ({ emote, index }) => {
  return (
    <ChatMessageContainer variants={item}>
      <Badge src="https://static-cdn.jtvnw.net/badges/v1/99464e35-4fc3-42dc-bb73-4fed41a9b41e/1" />
      <User stars={emote.stars}>User {index + 1}</User>
      <Message>: {getMessage(emote.stars)}</Message>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
