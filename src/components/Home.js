import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Layout } from "../styles";

import HeroImage from "../assets/hero-image.png";

const Home = () => {
  return (
    <StyledHome>
      <div className="hero-text">
        <p className="greet-text">Hey there!👋 I'm</p>
        <h1 className="name-text">Akarsh Shrivastava</h1>
        <h2 className="title-text">Web Developer & Designer</h2>
        <p className="desc-text">
          I love creating stuff that looks good and solves people’s problems.
          Glad that you’re here🌟
        </p>
        <div className="socials-container">
          <a
            href="https://github.com/Akarshshrivastava"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/akarsh.create/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/akarsh--shrivastava/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://twitter.com/akarshshrivast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="hero-illus" />
      </div>
    </StyledHome>
  );
};
const StyledHome = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 88vh;
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    .greet-text {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
    }
    .name-text {
      margin: 0.6rem 0;
      color: #f35626;
      background: linear-gradient(
        135deg,
        #5335cf 0%,
        #de005e 25%,
        #f66e48 50%,
        #de005e 75%,
        #5335cf 100%
      );
      background-size: 400%;
      animation: animate 5s linear infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /* background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
	    
	    
	    -webkit-animation: hue 10s infinite linear;
      @-webkit-keyframes hue {
        from {
          -webkit-filter: hue-rotate(0deg);
        }
        to {
          -webkit-filter: hue-rotate(-360deg);
        }
      } */
    }
    @keyframes animate {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .desc-text {
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.5;
      margin: 2.2rem 0;
    }
    .socials-container {
      display: flex;
      align-items: space-between;
      width: 70%;
      a {
        font-size: 1.4rem;
        font-weight: 500;
        margin-right: 4rem;
        color: #fff;
      }
    }
  }
  .hero-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    img {
      width: 22rem;
    }
  }
`;

export default Home;
