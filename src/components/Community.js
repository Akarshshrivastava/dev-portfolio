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
  .video-container {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .video-card {
      width: auto;
      height: 320px;
      background: blue;
      border-radius: 6px;
      .video-thumbnail {
        width: auto;
        height: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .video-info {
        a {
          width: 100%;
          cursor: pointer;
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          padding: 10px;
          border-radius: 6px;
          background: #00bcd4;
          transition: all 0.3s ease-in-out;
          &:hover {
            background: #00acc1;
          }
        }
        /* .video-player {
      padding-top: 56.25%; // Percentage ratio for 16:9
      position: relative; // Set to relative
      width: 100%; // Reset width
      height: 100%; // Reset height
    }

    .video-player > div {
      position: absolute; // Scaling will occur since parent is relative now
      top: 0; // Set to 0
      left: 0; // Set to 0
      width: 100%;
      height: 100%;
    } */

        /* .video-player {
      width: 240px;
      object-fit: cover;
      height: 202px;
      object-fit: cover;
      margin: 2.5rem 0;
    } */
      }
    }
  }
`;

export default Community;
