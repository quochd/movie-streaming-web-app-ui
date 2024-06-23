import styled from '@emotion/styled';
import tokyoTrain from '../../assets/images/tokyoTrain.png'; 
import moonFall from '../../assets/images/moonFall.png';
import lifeInParis from '../../assets/images/lifeInParis.png'; 
import ItemCard from './ItemCard';

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

const ContinueWatching = () => {
  return (
    <Section>
      <SectionTitle>Continue Watching</SectionTitle>
      <ItemGrid>
        <ItemCard title="Tokyo Train" description="2022 | Action comedy" isHorizontal image={tokyoTrain}/>
        <ItemCard title="Moonfall" description="2021 | Sci-fi" isHorizontal image={moonFall}/>
        <ItemCard title="Life in Paris" description="2023 | Documentary series" isHorizontal image={lifeInParis}/>
      </ItemGrid>
    </Section>
  );
};

export default ContinueWatching;
