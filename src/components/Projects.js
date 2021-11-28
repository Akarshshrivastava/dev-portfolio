import React from "react";
import styled from "styled-components";
import { Layout } from "../styles";
import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectsData } from "../data/projects-data";

const Projects = () => {
  return (
    <StyledProjects>
      <h2>Projects</h2>
      <p>I love to create & experiment. Here are some of my projects.</p>
      <div className="line"></div>
      <div className="project-container">
        {projectsData.map((project) => {
          return (
            <div className="project-card">
              <div className="project-image">
                <img src={project.imgSrc} alt="project-display" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.technology}</p>
                <div className="project-links">
                  <a
                    href={project["projectLink"]}
                    className="visit-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit <FontAwesomeIcon icon={faShareSquare} />
                  </a>
                  <a
                    href={project["githubLink"]}
                    className="source-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledProjects>
  );
};
const StyledProjects = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 2rem;
  padding-bottom: 2rem; */
  h2{
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
  p{
      margin: 1rem 0;
  }
  .project-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
    .project-card {
      width: 100%;
      height: 240px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2.5rem 0;
      background: linear-gradient(135deg, #160F0F 0%, #181111 100%);
        box-shadow: -2px 2px 4px rgba(9, 6, 6, 0.2), 2px -2px 4px rgba(9, 6, 6, 0.2), -2px -2px 4px rgba(37, 26, 26, 0.9), 2px 2px 5px rgba(9, 6, 6, 0.9), inset 1px 1px 2px rgba(37, 26, 26, 0.3), inset -1px -1px 2px rgba(9, 6, 6, 0.5);
        &:hover{
        background: #171010;
        box-shadow: 1px 1px 2px rgba(37, 26, 26, 0.3), -1px -1px 2px rgba(9, 6, 6, 0.5), inset -4px 4px 8px rgba(9, 6, 6, 0.2), inset 4px -4px 8px rgba(9, 6, 6, 0.2), inset -4px -4px 8px rgba(37, 26, 26, 0.9), inset 4px 4px 10px rgba(9, 6, 6, 0.9);
}

      .project-image {
        width: 50%;
        height: 100%;
        img { 
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .project-info {
        margin: 0 2rem;
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .project-links {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          a.visit-link {
            /* background: var(--brand-red); */
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            margin-right: 1rem;
            padding: 0.8rem 2rem;
            background: linear-gradient(135deg, #160F0F 0%, #181111 100%);
            box-shadow: -2px 2px 4px rgba(9, 6, 6, 0.2), 2px -2px 4px rgba(9, 6, 6, 0.2), -2px -2px 4px rgba(37, 26, 26, 0.9), 2px 2px 5px rgba(9, 6, 6, 0.9), inset 1px 1px 2px rgba(37, 26, 26, 0.3), inset -1px -1px 2px rgba(9, 6, 6, 0.5);
            /* border: 1px solid var(--brand-red); */
            border-radius: 5px;
            /* &:hover {
                background-color: transparent;
                color: var(--brand-red);
          } */
          &:hover {
            background: #171010;
            box-shadow: 1px 1px 2px rgba(37, 26, 26, 0.3), -1px -1px 2px rgba(9, 6, 6, 0.5), inset -4px 4px 8px rgba(9, 6, 6, 0.2), inset 4px -4px 8px rgba(9, 6, 6, 0.2), inset -4px -4px 8px rgba(37, 26, 26, 0.9), inset 4px 4px 10px rgba(9, 6, 6, 0.9);
          }
        }
        a.source-link {
            background: transparent;
            /* color: var(--brand-red); */
            color:white;
            background: linear-gradient(135deg, #160F0F 0%, #181111 100%);
            box-shadow: -2px 2px 4px rgba(9, 6, 6, 0.2), 2px -2px 4px rgba(9, 6, 6, 0.2), -2px -2px 4px rgba(37, 26, 26, 0.9), 2px 2px 5px rgba(9, 6, 6, 0.9), inset 1px 1px 2px rgba(37, 26, 26, 0.3), inset -1px -1px 2px rgba(9, 6, 6, 0.5);
            text-decoration: none;
            font-size: 1.2rem;
            padding: 0.8rem 2rem;
            /* border: 1px solid var(--brand-red); */
            border-radius: 5px;
            /* &:hover {
                background-color: var(--brand-red);
                color: white;
            } */
      }
    }
  }
`;
export default Projects;
