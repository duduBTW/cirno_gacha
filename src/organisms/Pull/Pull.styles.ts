import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const PullWrapper = styled(motion.div)`
  background: #18181b;

  position: fixed;
  height: 100%;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PullContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;
