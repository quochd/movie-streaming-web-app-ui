/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import purpleImage from '../../assets/images/purple.png';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  background-color: #1c1c1c; // Adjust to match your design
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SectionTitle = styled.h2`
  color: white;
  margin-bottom: 10px;
`;

const ItemGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const ItemCard = styled.div`
  background-color: #2c2c2c; // Adjust to match your design
  border-radius: 10px;
  width: 255px; // Adjust width as necessary
  height : 301px;
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


  background-color: rgba(255, 255, 255, 0.2);
  color: white;
 
  padding: 8px;
  border-radius: 5px;



  // background: linear-gradient(to bottom, #ff6b6b, #ff8e8e);
  // border: none;
  // border-radius: 8px;
  // padding: 12px 20px;
  // color: white;
  // font-weight: bold;
  // display: flex;
  // align-items: center;
  // gap: 8px;
  // cursor: pointer;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  // // border: 2px solid purple;
  // &:hover {
  //   background: linear-gradient(to bottom, #ff8e8e, #ff6b6b);
  // }
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

const DetailedSection = styled.div`
  background-color: inherit;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  width: 66%;
`;

const DetailedImage = styled.img`
width: 534px;
height: 431px;
  border-radius: 10px;
`;

const DetailedInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailedTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const DetailedMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #aaa;
`;

const DetailedDescription = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const WatchNowButton = styled.button`
  background-color: #6200ea;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
`;

const FavoriteButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.span`
  color: gold;
  font-size: 16px;
  margin-left: 140px;
`;

const DetailedTrending = () => {
    return (
        <HomePageContainer>
            <NavigationBar />
            <Container>
                <Banner isFavorite />
                <SectionTitle>Trending at this moment</SectionTitle>
                <ItemGrid>
                    <ItemCard>
                        <HeartIcon>
                            <FontAwesomeIcon icon={faHeart} />
                        </HeartIcon>
                        <ItemImage src={purpleImage} alt="Tokyo Train" />
                        <ItemInfo>
                            <ItemTitle>Tokyo Train</ItemTitle>
                            <ItemDescription>2022 | Action comedy</ItemDescription>
                        </ItemInfo>
                    </ItemCard>
                    <ItemCard>
                        <HeartIcon>
                            <FontAwesomeIcon icon={faHeart} />
                        </HeartIcon>
                        <ItemImage src={purpleImage} alt="Moonfall Again" />
                        <ItemInfo>
                            <ItemTitle>Moonfall Again</ItemTitle>
                            <ItemDescription>2022 | Sci-fi</ItemDescription>
                        </ItemInfo>
                    </ItemCard>
                    <ItemCard>
                        <HeartIcon>
                            <FontAwesomeIcon icon={faHeart} />
                        </HeartIcon>
                        <ItemImage src={purpleImage} alt="Life in Paris" />
                        <ItemInfo>
                            <ItemTitle>Life in Paris</ItemTitle>
                            <ItemDescription>2020 | Comedy drama</ItemDescription>
                        </ItemInfo>
                    </ItemCard>
                    <ItemCard>
                        <HeartIcon>
                            <FontAwesomeIcon icon={faHeart} />
                        </HeartIcon>
                        <ItemImage src={purpleImage} alt="House of Gucci" />
                        <ItemInfo>
                            <ItemTitle>House of Gucci</ItemTitle>
                            <ItemDescription>2021 | Drama</ItemDescription>
                        </ItemInfo>
                    </ItemCard>
                </ItemGrid>
                <DetailedSection>
                    <DetailedImage src={purpleImage} alt="House of Wealth" />
                    <DetailedInfo>
                        <div>
                            <DetailedTitle>House of Wealth <Star>⭐ 7.8/10</Star></DetailedTitle>
                            <DetailedMeta>
                                <span>2023</span>
                                <span>Drama</span>
                                <span>2h 38m</span>

                            </DetailedMeta>
                            <DetailedDescription>
                                The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.
                            </DetailedDescription>
                        </div>
                        <ButtonContainer>
                            <WatchNowButton>Watch now</WatchNowButton>
                            <FavoriteButton>
                                <FontAwesomeIcon icon={faHeart} />
                            </FavoriteButton>
                        </ButtonContainer>
                    </DetailedInfo>
                </DetailedSection>
            </Container>
        </HomePageContainer>
    );
};

export default DetailedTrending;
