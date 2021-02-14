import styled from 'styled-components';

export const Container = styled.div`  
  width: 100%;
  margin: auto 10%;
  background-color: ${({ theme }) => theme.colors.color3};
  @media screen and (max-width: 500px) {
    margin: auto;
    padding-top: 100px;
  }
  @media screen and (min-width: 1000px) {
    margin: auto;
  }
`;

export default function Infobar() {
  return (
    <Container>
        <h1>asdds</h1>  
    </Container>
  )
}