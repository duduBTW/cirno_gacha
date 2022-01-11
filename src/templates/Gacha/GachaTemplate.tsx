import { AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import Pull from "../../organisms/Pull";
import PullItem from "../../organisms/PullItem";
import ShakeTheFairy from "../../organisms/ShakeTheFairy";
import useDefaultConfigs from "../../utils/useLoadDefaultConfigs";

const GachaTemplate: FC = () => {
  useDefaultConfigs();

  const [pullingStep, setPullingStep] = useState(0);

  const getContent = () => {
    switch (pullingStep) {
      case 0:
        return <ShakeTheFairy onPull={() => setPullingStep(1)} />;
      case 1:
        return <Pull onPull={() => setPullingStep(2)} />;
      case 2:
        return <PullItem onPull={() => setPullingStep(0)} />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <AnimatePresence>{getContent()}</AnimatePresence>
    </div>
  );
};

export default GachaTemplate;
