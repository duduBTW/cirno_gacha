export type EmoteActions =
  | {
      type: "emotes/generate_next_pull";
    }
  | {
      type: "emotes/set_unlocked";
      payload: Record<string, boolean>;
    };

export type Rarity = 2 | 3 | 4 | 5;

export interface IEmote {
  key: string;
  id: string;
  stars: Rarity;
}

export interface EmoteState {
  unlocked: Record<string, boolean>;
  nextPull?: {
    list: IEmote[];
    mostRare: Rarity;
  };
}
