import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PullItemWrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background-image: url("/bgPull.png");
  background-repeat: no-repeat;
`;

export const Image = styled(motion.img)`
  align-self: center;
  justify-self: center;

  margin-bottom: 42px;
`;

export const Key = styled.span`
  color: #121a62;
  font-weight: bolder;
`;

export const Stars = styled(motion.div)`
  margin-bottom: 150px;
  display: flex;
  gap: 16px;
`;

export const Star = styled(motion.div)`
  width: 66px;
  height: 66px;

  background-image: url("/star.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Name = styled(motion.div)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;

  text-align: center;
  letter-spacing: 0.07em;

  color: #000000;

  margin-bottom: 8px;
`;

export const Skip = styled.div`
  font-family: Rubik;

  position: fixed;
  top: 0px;
  right: 0px;

  padding: 12px 26px;
  background: black;
  opacity: 0.4;
  color: white;

  cursor: pointer;
`;

export const NewBadge = styled(motion.div)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.07em;

  color: #0078f8;

  padding: 4px 12px;
  border-radius: 22222px;

  border: 1px solid #0078f8;
`;
