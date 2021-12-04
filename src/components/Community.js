import React from "react";
import styled from "styled-components";
// import ReactPlayer from "react-player";
import { Layout } from "../styles";
import { tutorialsData } from "../data/tutorials-data";

const Community = () => {
  return (
    <StyledCommunity>
      <h2>Tutorials</h2>
      <p>Giving back to the community is what I like the most.</p>
      <div className="line"></div>
      <div className="video-container">
        {tutorialsData.map((tutorial) => {
          return (
            <div className="video-card">
              <div className="video-thumbnail">
                <img src={tutorial.thumbnail} alt="thumbnail" />
              </div>
              <div className="video-info">
                <h3>{tutorial.title}</h3>
                <a
                  href={tutorial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </StyledCommunity>
  );
};
const StyledCommunity = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
  h2 {
    margin: 0.5rem 0;
  }
  p {
    margin: 1rem 0;
    text-align: center;
  }
  .video-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    padding: 1.5rem 0;
    .video-card {
      .video-info {
        /* p {
          font-size: 20px;
          text-align: left;
        } */
        h3{
          margin: 1.5rem 0;
          font-size: 20px !important;
        }
      }
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-gap: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      width: 80%;
      height: auto;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
    .video-card {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 12px 10px;
      align-items: center;
      height: auto;
      background: var(--dark-secondary);
      border-radius: 6px;
      border: 1px solid var(--dark-border);
      .video-thumbnail {
        width: auto;
        height: auto;
        img {
          border-radius: 4px;
          width: 100%;
          height: 100%;
        }
      }
      .video-info {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        h5 {
          margin: 20px 0 20px 0;
        }
        a {
          display: inline-block;
          width: 100%;
          cursor: pointer;
          color: #fff;
          text-decoration: none;
          text-align: center;
          padding: 12px;
          background: var(--dark-secondary);
          border: 1px solid var(--dark-border);
          border-radius: 6px;
          transition: all 0.1s ease-in-out;
          &:hover {
            border: 1px solid var(--dark-border-hover);
          }
        }
      }
    }
  }
`;

export default Community;
