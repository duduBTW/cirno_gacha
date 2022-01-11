/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { IEmote } from "../../types/emotes";

// styles
import {
  EmoteCardWrapper,
  Image,
  Name,
  Key,
  Stars,
  Star,
} from "./Emote.styles";

interface Props {
  emote: IEmote;
  unlocked: boolean;
}

const EmoteCard: FC<Props> = ({ emote: { key, stars, id }, unlocked }) => {
  const is_from_outside = stars === 2;

  let starsContent: null[] = [];

  for (let i = 0; i < stars; i++) {
    starsContent = [...starsContent, null];
  }

  return (
    <EmoteCardWrapper stars={stars}>
      <Image
        src={
          is_from_outside
            ? id
            : `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/3.0`
        }
        unlocked={unlocked}
        alt={key}
      />
      <Name>
        {!is_from_outside && "cir"}
        <Key>{key}</Key>
      </Name>
      <Stars>
        {starsContent.map((s) => (
          <Star key={s} />
        ))}
      </Stars>
    </EmoteCardWrapper>
  );
};

export default EmoteCard;
