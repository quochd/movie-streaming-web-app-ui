import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

const buttonStyle = css`
  margin: 10px;
`;

const StyledButton = ({ children, onClick }) => (
  <Button css={buttonStyle} onClick={onClick}>
    {children}
  </Button>
);

export default StyledButton;