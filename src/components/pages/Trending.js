import styled from '@emotion/styled';
import ItemCard from './ItemCard';
import tokyoTrain from '../../assets/images/tokyoTrain.png'; 
import moonFall from '../../assets/images/moonFall.png';
import lifeInParis from '../../assets/images/lifeInParis.png'; 
import houseOfGucci from '../../assets/images/houseOfGucci.png'; 

const Section = styled.div`
  background-color: inherit; 
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

const Trending = ({hasDetail}) => {

  return (
    <Section>
      {!hasDetail && <SectionTitle>Trending</SectionTitle>}
      <ItemGrid>
        <ItemCard title="Tokyo Train" description="2022 | Action comedy" image={tokyoTrain} isBlur={hasDetail}/>
        <ItemCard title="Moonfall" description="2021 | Sci-fi" image={moonFall} isBlur={hasDetail}/>
        <ItemCard title="Life in Paris" description="2023 | Documentary series" image={lifeInParis} isBlur={hasDetail}/>
        <ItemCard title="House of Gucci" description="2021 | Drama" image={houseOfGucci} />
      </ItemGrid>
    </Section>
  );
};

export default Trending;
