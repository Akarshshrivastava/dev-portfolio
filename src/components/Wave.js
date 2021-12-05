import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1924 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        d="M2 5C175.493 75.1387 618.241 322.108 1027.38 183.448C1436.52 44.788 1794.27 69.9778 1922 99.9052"
        stroke="#58A6FF"
        strokeOpacity="0.2"
        strokeWidth="5"
      />
    </WaveSvg>
  );
};

export default Wave;

const WaveSvg = styled.svg`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  z-index: -1;
  pointer-events: none;
  @media (max-width: 992px) {
    display: none;
  }
`;
