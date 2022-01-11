import { AnimatePresence, Variants } from "framer-motion";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { next } from "../../state/emotes";
import useSelector from "../../utils/useSelector";
import {
  PullItemWrapper,
  Image,
  Name,
  Key,
  Stars,
  Star,
  NewBadge,
  Skip,
} from "./PullItem.styles";

interface Props {
  onPull(): void;
}

const container: Variants = {
  animate: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  initial: { opacity: 0 },
};

const PullItem: FC<Props> = ({ onPull }) => {
  const dispatch = useDispatch();

  const { nextPull, unlocked } = useSelector(({ emotes }) => emotes);
  const [current, setCurrent] = useState(0);

  if (!nextPull) return <></>;
  const { stars, id, key } = nextPull.list[current];
  const is_from_outside = stars === 2;

  const finish = () => {
    dispatch(next());
    onPull();
  };

  let starsContent: null[] = [];

  for (let i = 0; i < stars; i++) {
    starsContent = [...starsContent, null];
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <PullItemWrapper
        onClick={() => {
          if (current === 9) {
            finish();
          } else {
            setCurrent((c) => c + 1);
          }
        }}
        key={current}
      >
        <Skip onClick={finish}>Skip</Skip>
        <Stars
          variants={container}
          exit={"exit"}
          initial={"initial"}
          animate={"animate"}
        >
          {starsContent.map((s) => (
            <Star variants={item} key={s} />
          ))}
        </Stars>
        <Image
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            x: -20,
            opacity: 0,
          }}
          transition={{
            delay: 0.8,
          }}
          src={
            is_from_outside
              ? id
              : `https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/3.0`
          }
          alt={key}
        />
        <Name
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          exit={{
            x: 20,
            opacity: 0,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          {!is_from_outside && "cir"}
          <Key>{key}</Key>
        </Name>
        {!unlocked[key] && (
          <NewBadge
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            New
          </NewBadge>
        )}
      </PullItemWrapper>
    </AnimatePresence>
  );
};

export default PullItem;
