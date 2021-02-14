import styled from 'styled-components'

const ButtonPd = styled.button`
  color: ${({ theme }) => theme.colors.color1};
  background-color: transparent;
  border-radius: 50px;
  font-size: 10px;
  border: 1px solid ${({ theme }) => theme.colors.color1};
  margin: 0 1em;
  padding: 0.75em 1.5em;
`;

export default ButtonPd;