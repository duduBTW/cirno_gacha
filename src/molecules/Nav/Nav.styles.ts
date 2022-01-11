import styled from "@emotion/styled";
import Image from "next/image";

export const NavWrapper = styled.div`
  box-sizing: border-box;

  padding-right: 180px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h1`
  padding: 46px 120px 20px 180px;
  margin: 0px;

  background: #edf5ff;
  color: #001853;
`;

export const Text = styled.span`
  margin-left: 12px;
`;

export const Icon = styled(Image)`
  margin-left: 12px;
  cursor: pointer;
`;

interface IFilter {
  selected: boolean;
}

export const Filter = styled.div<IFilter>`
  font-weight: ${({ selected }) => (selected ? 900 : 300)};
  color: ${({ selected }) => (selected ? "#001853" : "#9F9F9F")};
  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
`;
export const Filters = styled.div`
  display: flex;
  gap: 42px;

  font-family: Roboto;
  font-style: normal;
  font-size: 28px;
  line-height: 33px;

  text-align: right;
  letter-spacing: 0.07em;

  padding-bottom: 20px;
`;
