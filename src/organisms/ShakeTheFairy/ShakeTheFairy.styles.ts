import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";

export const GachaTemplateWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const InstructionLabel = styled.h4`
  position: absolute;
  bottom: -58px;
  right: 0px;
  left: 0px;

  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  text-align: center;
  letter-spacing: 0.07em;

  color: #748fae;
`;

export const Fairy = styled(motion.div)`
  height: 300px;
  width: 300px;

  background-image: url("/cirFairyHD.png");
  background-repeat: no-repeat;
  background-size: 100%;

  cursor: grab;

  &:active {
    cursor: default;
  }
`;

export const Back = styled(motion.div)`
  background: #28cbea;

  width: 60px;
  height: 60px;

  background-image: url("/back.png");
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  top: 0px;
  left: 0px;

  cursor: pointer;
`;
