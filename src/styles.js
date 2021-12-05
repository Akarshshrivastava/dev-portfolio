import { motion } from "framer-motion";
import styled from "styled-components";

export const Layout = styled(motion.div)`
  padding: 0 12rem;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 1200px) {
    padding: 0 8rem;
  }
  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
