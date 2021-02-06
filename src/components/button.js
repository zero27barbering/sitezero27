import styled from 'styled-components'

const Button = styled.button`
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: 5px;
  font-size: 1em;
  border: 2px solid ${({ theme }) => theme.colors.color1};
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default Button;