import styled from 'styled-components'

const ButtonPd = styled.button`
  color: ${({ theme }) => theme.colors.color1};
  background-color: transparent;
  border-radius: 50px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.color1};
  /*margin: 0 1em;*/
  padding: 0.75em 1.5em;
  width: 115px;
  transition: all 250ms ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.color1};
    color: white;
  }
  
  &:active {
    transform: scale(0.9);
  }
`;

export default ButtonPd;