import React from 'react';
import styled from '@emotion/styled';
import purpleImage from '../../assets/images/purple.png';

// Styled component for the movie thumbnail
const Thumbnail = styled.div`
  background-image: url(${purpleImage});
  background-size: cover;
  width: 200px;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

// Overlay text for title, year, and genre
const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 12px;
  width: 100%;
  background: linear-gradient(to right, #e9e9e9, rgba(225, 234, 238, 0.7));
  color: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const MovieThumbnail = () => {
  return (
    <Thumbnail>
      <Overlay>
        <p>Title: House of Gucci</p>
        <p>Year: 2021</p>
        <p>Genre: Drama</p>
      </Overlay>
    </Thumbnail>
  );
};

export default MovieThumbnail;
