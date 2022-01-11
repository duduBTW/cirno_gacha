import { EmoteActions, EmoteState } from "../types/emotes";
import { Reducer } from "redux";
import genereteNextPull from "../utils/generateNextPull";

const STATE_DEFAULT: EmoteState = {
  unlocked: {},
};

// Reducer
const reducer: Reducer<EmoteState> = (
  state: EmoteState = STATE_DEFAULT,
  action: EmoteActions
) => {
  switch (action.type) {
    case "emotes/generate_next_pull":
      const unlocked: Record<string, boolean> = state.unlocked;

      if (state.nextPull !== undefined) {
        state.nextPull.list.forEach((nextPullItem) => {
          unlocked[nextPullItem.key] = true;
        });
      }

      return {
        unlocked,
        nextPull: genereteNextPull(10, state.unlocked),
      };
    case "emotes/set_unlocked":
      return {
        ...state,
        unlocked: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators
export function next(): EmoteActions {
  return { type: "emotes/generate_next_pull" };
}

export function setUnlocked(payload: Record<string, boolean>): EmoteActions {
  return { type: "emotes/set_unlocked", payload: payload };
}

export default reducer;
