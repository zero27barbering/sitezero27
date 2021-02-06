import styled from 'styled-components'
import products from '../products.json'
import style from '../style.json';
import Widget from '../src/components/Widget';
import Background from '../src/components/Background';
import Hair from '../src/components/Products';
import Beard from '../src/components/Products/beard';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 600px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 500px 15px 15px 15px;
  }
`;

export default function Home() {
  return (
    <Background backgroundImage={style.bg}>
      <Container>
        <Widget>
          <Widget.Header>
            <Hair />
          </Widget.Header> 
        </Widget>
        <Widget>
          <Widget.Header>
            <Beard />
          </Widget.Header> 
        </Widget>
      </Container>      
    </Background>
  );
}
