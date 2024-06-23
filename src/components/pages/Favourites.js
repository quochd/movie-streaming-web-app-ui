import React from 'react';
import styled from '@emotion/styled';
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import tokyoTrain from '../../assets/images/tokyoTrain.png'; 
import moonFall from '../../assets/images/moonFall.png';
import ItemCard from './ItemCard';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // This will take up the remaining space
`;

const Section = styled.div`
  background-color: inherit; 
  padding: 20px;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  color: white;
  margin-bottom: 10px;
`;

const ItemGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Favourites = () => {
  return (
    <div>
      <HomePageContainer>
        <NavigationBar />
        <ContentContainer>
          <Banner isFavorite />
          <Section>
            <SectionTitle>Favourites</SectionTitle>
            <ItemGrid>
              <ItemCard title="Tokyo Train" description="2022 | Action comedy" isHorizontal isFavorite image={tokyoTrain}/>
              <ItemCard title="Moonfall" description="2021 | Sci-fi" isHorizontal isFavorite image={moonFall}/>
            </ItemGrid>
          </Section>
        </ContentContainer>
      </HomePageContainer>
    </div>
  );
};

export default Favourites;