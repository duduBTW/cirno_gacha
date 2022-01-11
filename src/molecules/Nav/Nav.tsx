import Link from "next/link";
import { FC } from "react";

// styles
import { NavWrapper, Filters, Title, Text, Icon, Filter } from "./Nav.styles";

interface Props {
  onChange(): void;
  fitler: number;
}

const Nav: FC<Props> = ({ onChange, fitler }) => {
  return (
    <NavWrapper>
      <Title>
        <Link href={"/"} passHref>
          <Icon width={24} height={24} src="/backI.png" alt="back" />
        </Link>
        <Text>Inventory</Text>
      </Title>
      <Filters>
        <Filter onClick={onChange} selected={fitler === 0}>
          All
        </Filter>
        <Filter onClick={onChange} selected={fitler === 1}>
          Only unlocked
        </Filter>
      </Filters>
    </NavWrapper>
  );
};

export default Nav;
