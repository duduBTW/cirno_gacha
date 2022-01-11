import { FC, useMemo } from "react";
import EmoteCard from "../../atoms/Emote";
import EMOTES from "../../constants/emotes";
import useSelector from "../../utils/useSelector";

// styles
import { EmoteGridWrapper } from "./EmoteGridWrapper.styles";

interface Props {
  fitler: number;
}

const EmoteGrid: FC<Props> = ({ fitler }) => {
  const unlocked = useSelector(({ emotes }) => emotes.unlocked);
  const emotes = useMemo(() => {
    let list = Object.entries(EMOTES)
      .sort(([a], [b]) => Number(b) - Number(a))
      .flatMap(([_, emotes]) => emotes);

    if (fitler === 1) {
      list = list.filter((listItem) => unlocked[listItem.key]);
    }

    return list;
  }, [fitler, unlocked]);

  return (
    <EmoteGridWrapper>
      {emotes.map((emote) => (
        <EmoteCard
          unlocked={Boolean(unlocked[emote.key])}
          key={emote.key}
          emote={emote}
        />
      ))}
    </EmoteGridWrapper>
  );
};

export default EmoteGrid;
