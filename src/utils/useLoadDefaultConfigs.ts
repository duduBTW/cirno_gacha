import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { next, setUnlocked } from "../state/emotes";
import useSelector from "./useSelector";

const useDefaultConfigs = () => {
  const nextPull = useSelector((state) => state.emotes.nextPull);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!nextPull) {
      const reduxState = localStorage.getItem("reduxState");
      if (reduxState)
        dispatch(setUnlocked(JSON.parse(reduxState).emotes.unlocked));

      dispatch(next());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
};

export default useDefaultConfigs;
