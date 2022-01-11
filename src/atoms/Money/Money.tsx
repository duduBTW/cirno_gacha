import { FC } from "react";

// styles
import { MoneyWrapper, Cash, Quantity, Dollar, CirGreed } from "./Money.styles";

const Money: FC = () => {
  return (
    <MoneyWrapper>
      <Cash>
        <Dollar>$</Dollar> baka cash
      </Cash>
      <Quantity>999999999999999999999</Quantity>
      <CirGreed src="/money.png" />
    </MoneyWrapper>
  );
};

export default Money;
