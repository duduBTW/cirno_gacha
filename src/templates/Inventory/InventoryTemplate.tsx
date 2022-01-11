import { FC, useState } from "react";
import useDefaultConfigs from "../../utils/useLoadDefaultConfigs";

// components
import Nav from "../../molecules/Nav";
import EmoteGrid from "../../organisms/EmoteGrid";

const InventoryTemplate: FC = () => {
  useDefaultConfigs();

  const [fitler, setFitler] = useState(0);

  return (
    <>
      <Nav
        fitler={fitler}
        onChange={() => setFitler((f) => (f === 1 ? 0 : 1))}
      />
      <EmoteGrid fitler={fitler} />
    </>
  );
};

export default InventoryTemplate;
