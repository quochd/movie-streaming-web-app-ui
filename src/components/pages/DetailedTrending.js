import styled from '@emotion/styled';
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import houseOfGucci from '../../assets/images/houseOfGucci.png';
import Trending from './Trending';
import ButtonContainer from './ButtonContainer';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  background-color: #1c1c1c; 
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
  margin-left: 16px;
`;

const ItemGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;
  overflow-x: auto;
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
        <Section>
          <SectionTitle>Trending at this moment</SectionTitle>
          <ItemGrid>
            <Trending hasDetail/>
          </ItemGrid>
        </Section>
        <DetailedSection>
          <DetailedImage src={houseOfGucci} alt="House of Wealth" />
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
            <ButtonContainer />
          </DetailedInfo>
        </DetailedSection>
      </Container>
    </HomePageContainer>
  );
};

export default DetailedTrending;
