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

const Contact = () => {
  return (
    <StyledContact>
      <h2>Get In Touch</h2>
      <p>Let's shake our hands & make our dreams turn to reality.</p>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Akarsh Shrivastava</h3>
          <p>mailakarshshrivastava@gmail.com</p>
        </div>
        <div className="project-info">
          <p>Website made using ReactJS</p>
        </div>
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
    </StyledContact>
  );
};
const StyledContact = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  padding-top: 3rem;

  h2 {
    margin: 0.5rem 0;
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
  }
  p {
    margin: 1rem 0;
    text-align: center;

  }
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 1.5rem 0;
    margin: 2rem 0;
    .socials-container {
      display: flex;
      align-items: space-between;
      a {
        font-size: 1.4rem;
        font-weight: 500;
        margin-right: 1.5rem;
        color: #fff;
      }
    }
  }
`;
export default Contact;
