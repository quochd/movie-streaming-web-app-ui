import styled from '@emotion/styled';
import backgroundImage from '../../assets/images/background2.png';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate} from "react-router-dom";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color : white;
`;

const LogoText = styled.h1`
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  color : white;
`;

const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.small};
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLoggedIn", "true");
    navigate("/");
};

  return (
    <Container>
      <FormWrapper>
        <Logo>
          <FontAwesomeIcon icon={faMugHot} />
          <LogoText>WATCH</LogoText>
        </Logo>
        <Subtitle>Enjoy the newest movies</Subtitle>
        <Button onClick={handleSubmit}>Log in</Button>
        <Link >No account? Sign up</Link>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;
