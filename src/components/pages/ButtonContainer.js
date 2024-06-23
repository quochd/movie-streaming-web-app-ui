import styled from '@emotion/styled';
import { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
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
  width : 139px;
  height : 54px;
`;

const FavoriteButton = styled.button`
  // background-color: rgba(255, 255, 255, 0.2);
  // color: white;

  background-color: ${props => props.isToggle || props.isFavorite ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.isToggle || props.isFavorite ? 'rgb(97, 0, 194)' : 'white'};

  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width : 54px;
  height : 54px;
`;

const ButtonContainer = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };

    return (
        <Container>
            <WatchNowButton>Watch now</WatchNowButton>
            <FavoriteButton isToggle={isToggle} onClick={handleToggle}>
                <FontAwesomeIcon icon={faHeart} />
            </FavoriteButton>
        </Container>
    );
}

export default ButtonContainer;