import React from 'react';
import styled from '@emotion/styled';
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import purpleImage from '../../assets/images/purple.png';

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
  background-color: inherit; // Adjust to match your design
  padding: 20px;
  border-radius: 10px;
//   margin-top: 20px;
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

const ItemCard = styled.div`
  background-color: #2c2c2c; // Adjust to match your design
  border-radius: 10px;
  width: 348px; // Adjust width as necessary
  height : 209px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const HeartIcon = styled.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;


  background-color: rgb(236, 235, 234, 0.8);
  color: #6100C2;
  padding: 8px;
  border-radius: 5px;
`;

const ItemInfo = styled.div`
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

const ItemTitle = styled.h3`
  font-size: 16px;
  margin: 5px 0;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

const Favourites = () => {
    return (
        <div>
            <HomePageContainer>
                <NavigationBar />
                <ContentContainer>
                    <Banner isFavorite/>
                    <Section>
                        <SectionTitle>Favourites</SectionTitle>
                        <ItemGrid>
                            <ItemCard>
                                <HeartIcon>
                                    <FontAwesomeIcon icon={faHeart} />
                                </HeartIcon>
                                <ItemImage src={purpleImage} alt="Movie 1" />
                                <ItemInfo>
                                    <ItemTitle>Movie 1</ItemTitle>
                                    <ItemDescription>Description</ItemDescription>
                                </ItemInfo>
                            </ItemCard>
                            <ItemCard>
                                <HeartIcon>
                                    <FontAwesomeIcon icon={faHeart} />
                                </HeartIcon>
                                <ItemImage src={purpleImage} alt="Movie 1" />
                                <ItemInfo>
                                    <ItemTitle>Movie 1</ItemTitle>
                                    <ItemDescription>Description</ItemDescription>
                                </ItemInfo>
                            </ItemCard>
                        </ItemGrid>
                    </Section>
                </ContentContainer>
            </HomePageContainer>
        </div>
    );
};

export default Favourites;