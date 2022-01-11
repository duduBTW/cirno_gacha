import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { EmoteState } from "../types/emotes";
import emotes from "./emotes";

export interface RootState {
  emotes: EmoteState;
}

const rootReducer = combineReducers<RootState>({
  emotes,
});

const makeStore = () => {
  // Create store
  const store = createStore(rootReducer, composeWithDevTools());

  store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  });

  // Return store
  return store;
};

// export an assembled wrapper
const storeWrapper = createWrapper(makeStore, { debug: false });

export default storeWrapper;
