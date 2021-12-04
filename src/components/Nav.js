import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../assets/icon.gif";
import { Layout } from "../styles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <NavStyled>
        <a href="/" id="logo">
          <img src={Icon} alt="logo" />
        </a>
        <ul className={`nav-links ${open ? " open" : ""}`}>
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
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </NavStyled>
    </nav>
  );
};
const NavStyled = styled(Layout)`
  min-height: 10vh;
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
      display: none;
      transition: all 0.2s ease;
    }
    .nav-links.open {
      position: absolute;
      right: 0;
      top: 10vh;
      z-index: 100;
      height: 100vh;
      background: var(--dark-secondary);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 50%;
    }
  }
`;
export default Nav;
