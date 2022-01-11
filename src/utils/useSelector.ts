import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "../state";

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default useSelector;
