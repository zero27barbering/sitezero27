import styled from 'styled-components'

const Button = styled.button`
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.color1};
  padding: 0.01em 2em;
  
  transition: all 250ms ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.color2};
    color: ${({ theme }) => theme.colors.color1};
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

export default Button;