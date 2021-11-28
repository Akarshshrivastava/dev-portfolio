import React from "react";
import styled from "styled-components";
import Icon from "../assets/icon.gif";
import { Layout } from "../styles";
const Nav = () => {
  return (
    <NavStyled>
        <a href="/" id="logo">
          <img src={Icon} alt="logo" />
        </a>
      <ul>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/about">Tutorials</a>
        </li>
        <li>
          <a href="/contact">Community</a>
        </li>
      </ul>
    </NavStyled>
  );
};
const NavStyled = styled(Layout)`
  min-height: 12vh;
  position: absolute;
  z-index: 999;
  top: 0;
  background: var(--dark-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #171010;
  box-shadow: -5px 5px 10px rgba(15, 10, 10, 0.2), 5px -5px 10px rgba(15, 10, 10, 0.2), -5px -5px 10px rgba(31, 22, 22, 0.9), 5px 5px 13px rgba(15, 10, 10, 0.9), inset 1px 1px 2px rgba(31, 22, 22, 0.3), inset -1px -1px 2px rgba(15, 10, 10, 0.5);
  a {
    color: #fff;
    text-decoration: none;
    img{
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
`;
export default Nav;
