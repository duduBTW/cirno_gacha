import styled from "@emotion/styled";
import Link from "next/link";

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.06em;

  padding: 16px 0px;

  color: #121a62;

  z-index: 2;
  cursor: pointer;

  transition: color ease 0.1s, background ease 0.1s, margin ease 0.1s;
  &:hover {
    transition: color ease 0.1s, background ease 0.1s, margin ease 0.1s;

    background: rgba(255, 255, 255, 0.4);
    margin-left: -12px;
  }
`;

export const Play = styled(Option)`
  font-weight: bold;
`;
