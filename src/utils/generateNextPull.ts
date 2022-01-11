// no types sadge
// @ts-ignore
import rand from "simple-gacha-factory";
import EMOTES from "../constants/emotes";

// types
import { EmoteState, IEmote, Rarity } from "../types/emotes";

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomEmote = (rarity: Rarity) =>
  EMOTES[rarity][getRandomInt(1, EMOTES[rarity].length) - 1];

const genereteNextPull = (
  quantity: number,
  unloked: EmoteState["unlocked"]
): EmoteState["nextPull"] => {
  const factory = new rand.RandFactory();

  const prob = factory.createRand("probability", {
    5: 2,
    4: 8,
    3: 40,
    2: 50,
  });

  let mostRare: Rarity = 2;
  const list = prob.rand(quantity).map((pullRarity: Rarity): IEmote => {
    if (pullRarity > mostRare) mostRare = pullRarity;

    switch (pullRarity) {
      case 5:
        let emote: null | IEmote = null;

        if (EMOTES[5].some((emote) => !unloked[emote.key]))
          return getRandomEmote(pullRarity);

        while (emote === null || unloked[emote?.key]) {
          emote = getRandomEmote(pullRarity);
        }

        return emote;

      default:
        // generate random emote
        return getRandomEmote(pullRarity);
    }
  });

  return {
    list,
    mostRare,
  };
};

export default genereteNextPull;
