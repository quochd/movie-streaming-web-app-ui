import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ItemCardContainer = styled.div`
  background-color: #2c2c2c; 
  border-radius: 10px;
  width: ${props => props.isHorizontal ? '348px' : '255px'}; 
  height : ${props => props.isHorizontal ? '209px' : '301px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const HeartIcon = styled.svg`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: ${props => props.isToggle || props.isFavorite ? 'white' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.isToggle || props.isFavorite ? 'rgb(97, 0, 194)' : 'white'};
  padding: 8px;
  border-radius: 5px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity : ${props => props.isBlur  ? '0.2' : '1'};
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

const ItemCard = ({ title, description,image, isHorizontal , isFavorite ,isBlur}) => {

  const [isToggle, setIsToggle] = useState(false);

  const handleCardClick = (e) => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };

    return (
        <ItemCardContainer isHorizontal={isHorizontal} >
            <HeartIcon isToggle={isToggle} isFavorite={isFavorite} onClick={handleCardClick}>
                <FontAwesomeIcon icon={faHeart} />
            </HeartIcon>
            <ItemImage src={image} alt={title} isBlur={isBlur}/>
            <ItemInfo>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemInfo>
        </ItemCardContainer>
    );
};

export default ItemCard;