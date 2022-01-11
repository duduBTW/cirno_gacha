import { Variants } from "framer-motion";
import { FC, useEffect } from "react";
import ChatMessage from "../../atoms/ChatMessage/ChatMessage";
import useSelector from "../../utils/useSelector";
import { PullWrapper, PullContainer } from "./Pull.styles";

const container: Variants = {
  initial: {
    height: "0%",
  },
  animate: {
    height: "100%",
  },
};

const content: Variants = {
  animate: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
    },
  },
};

interface Props {
  onPull(): void;
}

const Pull: FC<Props> = ({ onPull }) => {
  const nextPull = useSelector(({ emotes }) => emotes.nextPull);

  useEffect(() => {
    setTimeout(() => {
      onPull();
    }, 3000);
  }, [onPull]);

  if (!nextPull) return <></>;

  return (
    <PullWrapper variants={container} initial={"initial"} animate={"animate"}>
      <PullContainer variants={content}>
        {nextPull.list.map((emote, index) => (
          <ChatMessage key={emote.key} index={index} emote={emote} />
        ))}
      </PullContainer>
    </PullWrapper>
  );
};

export default Pull;
