import styled from "@emotion/styled";

export const Quantity = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;

  text-align: center;

  color: #000000;
`;

export const Dollar = styled.span`
  font-size: 16px;
`;

export const Cash = styled.div`
  display: block;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;

  color: #eacf13;
`;

export const MoneyWrapper = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 6px 8px;

  gap: 8px;

  width: 172px;
  white-space: nowrap;

  background: #ffffff;
  border: 1px solid #e2f0ff;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const CirGreed = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
