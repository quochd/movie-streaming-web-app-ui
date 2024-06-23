import { css } from '@emotion/react';
import styled from '@emotion/styled';
import profileImage from '../../assets/images/avatar.png';
import backgroundImage from '../../assets/images/purple.png';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonContainer from './ButtonContainer';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  height: ${props => props.isFavorite ? '100px' : '455px'} ;
  width: 1626px;
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

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 25px;
  margin-left: 1033px;
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

const Banner = ({ isFavorite }) => {
  return (
    <Container isFavorite={isFavorite}>
      <NavBar>
        <NavLinks>
          <Link>Movies</Link>
          <Link>Series</Link>
          <Link>Documentaries</Link>
        </NavLinks>
        <ProfileSection>
          <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
          <FontAwesomeIcon icon={faBell} style={{ color: 'white' }} />
          <ProfileImage src={profileImage} alt="Profile" />
          <span css={css`color: white;`}>Tetiana</span>
        </ProfileSection>
      </NavBar>
      {
        !isFavorite && (
          <Content>
            <Title >Insider</Title>
            <Description>2022 | Comedy horror | 1 Season</Description>
            <ButtonContainer />
          </Content>
        )
      }
    </Container>
  );
};

export default Banner;
