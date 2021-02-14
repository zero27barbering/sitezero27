import styled from 'styled-components'

const Button = styled.button`
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.color1};
  padding: 0.01em 2em;
`;

export default Button;