import styled from '@emotion/styled';
import { faMugHot, faHome, faHeart, faChartLine, faCalendarAlt, faUsers, faComments, faCog, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, Link, useLocation } from "react-router-dom";

const Nav = styled.nav`
  width: 275px;
  height: 1160px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.white};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const LogoText = styled.h1`
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: 1.5rem;
`;

const ContainerNavItem = styled.div`
  width: 144px;
  height: 732px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} 0;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const NavIcon = styled.div`
  margin-right: ${({ theme }) => theme.spacing.small};

`;

const NavText = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    font-weight: bold;
  }
`;

const Divider = styled.div`
  height: 11px;
  margin : 120px 20px 120px 20px;
`;

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Nav>
      <Logo>
        <FontAwesomeIcon icon={faMugHot} />
        <LogoText>WATCH</LogoText>
      </Logo>
      <ContainerNavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faHome} /></NavIcon>
          <NavText to="/" className={location.pathname === "/" ? "active" : ""}>Home</NavText>
        </NavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faHeart} /></NavIcon>
          <NavText to="/favourites" className={location.pathname === "/favourites" ? "active" : ""}>Favourites</NavText>
        </NavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faChartLine} /></NavIcon>
          <NavText to="/detailed-trending" className={location.pathname === "/detailed-trending" ? "active" : ""}>Trending</NavText>
        </NavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faCalendarAlt} /></NavIcon>
          <NavText className=''>Coming soon</NavText>
        </NavItem>
        <Divider />
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faUsers} /></NavIcon>
          <NavText>Community</NavText>
        </NavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faComments} /></NavIcon>
          <NavText>Social</NavText>
        </NavItem>
        <Divider />
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faCog} /></NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
        <NavItem>
          <NavIcon><FontAwesomeIcon icon={faSignInAlt} /></NavIcon>
          <NavText onClick={handleLogOut}>Log out</NavText>
        </NavItem>
      </ContainerNavItem>
    </Nav>
  );
};

export default NavigationBar;
