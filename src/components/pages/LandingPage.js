// src/components/HomePage.js
import React from 'react';
import styled from '@emotion/styled';
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import Trending from './Trending';
import ContinueWatching from './ContinueWatching';
import MovieThumbnail from './MovieThumbnail';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // This will take up the remaining space
`;

const LandingPage = () => {
  return (
    <HomePageContainer>
      <NavigationBar />
      <ContentContainer>
        <Banner />
        <Trending />
        <ContinueWatching />
      </ContentContainer>

    </HomePageContainer>
  );
};

export default LandingPage;