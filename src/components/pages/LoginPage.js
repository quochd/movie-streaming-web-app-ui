import { css } from '@emotion/react';
import styled from '@emotion/styled';
import backgroundImage from '../../assets/images/background2.png';


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
//   background: rgba(0, 0, 0, 0.6);
  padding: ${({ theme }) => theme.spacing.large};
//   border-radius: 8px;
  text-align: center;
//   opacity: 0.8;
`;

const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Subtitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.large};
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
    return (
        <Container>
            <FormWrapper>
                <Title>WATCH</Title>
                <Subtitle>Enjoy the newest movies</Subtitle>
                <Button>Log in</Button>
                <Link href="#">No account? Sign up</Link>
            </FormWrapper>
        </Container>
    );
};

export default LoginPage;
