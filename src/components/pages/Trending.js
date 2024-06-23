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
  // padding: 50px;
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

const Trending = () => {
  return (
    <Section>
      <SectionTitle>Trending</SectionTitle>
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
          <ItemImage src={purpleImage} alt="Moonfall" />
          <ItemInfo>
            <ItemTitle>Moonfall</ItemTitle>
            <ItemDescription>2021 | Sci-fi</ItemDescription>
          </ItemInfo>
        </ItemCard>
        <ItemCard>
          <HeartIcon>
            <FontAwesomeIcon icon={faHeart} />
          </HeartIcon>
          <ItemImage src={purpleImage} alt="Life in Paris" />
          <ItemInfo>
            <ItemTitle>Life in Paris</ItemTitle>
            <ItemDescription>2023 | Documentary series</ItemDescription>
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
    </Section>
  );
};

export default Trending;
