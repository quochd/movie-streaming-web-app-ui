/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import profileImage from '../../assets/images/snorlax.png'; // Update the path accordingly
import backgroundImage from '../../assets/images/purple.png';
import { faSearch, faBell,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  // background: url(${backgroundImage}) no-repeat center center/cover; 
  // height: 455px; /* Adjust height as necessary */
  height: ${props => props.isFavorite ? '100px' : '455px'} ;
  width: 1626px;
  // height: 100vh;
  // padding: 0 20px;

  position: relative;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 25px;
  margin-left: 25px;
  & a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 25px;
  margin-left: 648px;

  
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  // margin-bottom: 50px; // Adjust as necessary
  padding : 15px;
  background: url(${backgroundImage}) no-repeat center center/cover; 
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 10px 0;
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
  width : 139px;
  height : 54px;
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
  width : 54px;
  height : 54px;
`;

const Banner = ({isFavorite}) => {
  console.log("isFavorite", isFavorite);
  return (
    <Container isFavorite={isFavorite}>
      <NavBar>
        <NavLinks>
          <a href="#">Movies</a>
          <a href="#">Series</a>
          <a href="#">Documentaries</a>
        </NavLinks>
        <ProfileSection>
          <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }}/>
          <FontAwesomeIcon icon={faBell} style={{ color: 'white' }}/>
          <ProfileImage src={profileImage} alt="Profile" />
          <span css={css`color: white;`}>Tetiana</span>
        </ProfileSection>
      </NavBar>
      {
        !isFavorite && (
          <Content>
            <Title >Insider</Title>
            <Description>2022 | Comedy horror | 1 Season</Description>
            <ButtonContainer>
              <WatchNowButton>Watch now</WatchNowButton>
              <FavoriteButton>
                <FontAwesomeIcon icon={faHeart} />
              </FavoriteButton>
            </ButtonContainer>
          </Content>
        )
      }
    </Container>
  );
};

export default Banner;
