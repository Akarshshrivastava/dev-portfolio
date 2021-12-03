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
            <div className="project-card glowing">
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
                    <FontAwesomeIcon icon={faShareSquare} />
                    &nbsp;Visit
                  </a>
                  <a
                    href={project["githubLink"]}
                    className="source-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    &nbsp;GitHub
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
    text-align: center;
    margin: 1rem 0;
  }
  .project-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 1.5rem 0;
    .project-card {
      position: relative;
      width: 100%;
      height: 240px;
      border: 1px solid var(--dark-border);
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      margin: 2rem 0;
      background: var(--dark-secondary);

      transition: all 0.1s ease;

      .project-image {
        width: 420px;
        height: 100%;
        border-radius: 6px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .project-info {
        margin: 0 4rem;
        width: 90%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 6px;

        .project-links {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          a.visit-link {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            margin-right: 1rem;
            padding: 0.8rem 2rem;
            background: var(--dark-secondary);
            border: 1px solid var(--dark-border);
            border-radius: 6px;
            transition: all 0.1s ease;

            &:hover {
              border: 1px solid var(--dark-border-hover);
            }
          }
          a.source-link {
            background: var(--dark-secondary);
            border: 1px solid var(--dark-border);
            border-radius: 6px;

            transition: all 0.1s ease;

            color: white;

            text-decoration: none;
            font-size: 1.2rem;
            padding: 0.8rem 2rem;
            &:hover {
              border: 1px solid var(--dark-border-hover);
            }
          }
        }
      }
    }
    @media (max-width: 1024px) {
      .project-card {
        .project-info {
          margin: 0 1.5rem;
        }
      }
    }
    @media (max-width: 768px) {
      .project-card {
        height: 200px;
        .project-info {
          width: auto;
          margin: 0 1rem;
        }
        a.visit-link {
          width: 100%;
          padding: 0.6rem 0.2rem;
          font-size: 0.2rem;
          margin-right: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a.source-link {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.6rem 0.2rem;
          font-size: 0.5rem;
        }
      }
      
    }
    
    @media (max-width: 640px) {
      .project-card {
        width: 80%;
        height: auto;
        flex-direction: column;
        margin: 1rem 0;
        align-items: left;
        .project-info {
          width: 100%;
          height: auto;
          margin-top: 1rem;
        }
        .project-image {
          width: 100%;
          height: 200px;
        }
      }
    }
    @media (max-width: 480px) {
      .project-card {
        width: 100%;
        .project-info {
          .project-links {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            a.visit-link {
              margin-right: 0;
              margin-bottom: 1rem;
            }
          }
        }
    }
  }
`;
export default Projects;
