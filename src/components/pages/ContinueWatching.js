/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import purpleImage from '../../assets/images/purple.png'; // Import the image file
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Section = styled.div`
background-color: inherit; // Adjust to match your design
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
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
  // padding: 10px;
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


  background-color: rgba(255, 255, 255, 0.2);
  color: white;
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

const ContinueWatching = () => {
  return (
    <Section>
      <SectionTitle>Continue Watching</SectionTitle>
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
          <ItemImage src={purpleImage} alt="Movie 2" />
          <ItemInfo>
            <ItemTitle>Movie 2</ItemTitle>
            <ItemDescription>Description</ItemDescription>
          </ItemInfo>
        </ItemCard>
        <ItemCard>
          <HeartIcon>
            <FontAwesomeIcon icon={faHeart} />
          </HeartIcon>
          <ItemImage src={purpleImage} alt="Movie 3" />
          <ItemInfo>
            <ItemTitle>Movie 3</ItemTitle>
            <ItemDescription>Description</ItemDescription>
          </ItemInfo>
        </ItemCard>
      </ItemGrid>
    </Section>
  );
};

export default ContinueWatching;
