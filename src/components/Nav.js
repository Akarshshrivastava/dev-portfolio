import React from "react";
import styled from "styled-components";
import Icon from "../assets/icon.gif";
import { Layout } from "../styles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <NavStyled>
      <a href="/" id="logo">
        <img src={Icon} alt="logo" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/about">Tutorials</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </NavStyled>
  );
};
const NavStyled = styled(Layout)`
  min-height: 10vh;
  position: absolute;
  z-index: 99;
  top: 0;
  overflow-x: hidden;
  background: var(--dark-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--dark-secondary);
  border-bottom: 1px solid var(--dark-border);
  a {
    color: #fff;
    text-decoration: none;
    img {
      width: 2rem;
    }
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20rem;
    li {
      a {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
  }
  .menu-btn {
    display: none;
  }
  @media (max-width: 768px) {
    .menu-btn {
      display: block;
    }
    .nav-links {
      position: absolute;
      left: 0;
      top: 10vh;
      z-index: 100;
      height: 24vh;
      /* top: 10vh; */
      background: rgba(1, 1, 245, 0.589);
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: ce;
      width: 100%;
      /* transform: translateX(100%); */
    }
  }
`;
export default Nav;
