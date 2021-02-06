import styled from 'styled-components';
import style from '../style.json';
import Widget from '../src/components/Widget';
import Background from '../src/components/Background';
import Hair from '../src/components/Products/hair';
import HairPigmentation from '../src/components/Products/hairPigmentation';
import Beard from '../src/components/Products/beard';
import BeardTherapy from '../src/components/Products/beardTherapy';
import BeardPigmentation from '../src/components/Products/beardPigmentation';
import Eyebrows from '../src/components/Products/eyebrows';
import ProgressiveTreatmentHair from '../src/components/Products/progressiveTreatment';
import ComboHairBeard from '../src/components/Products/comboHairBeard';
import ComboHairBeardEyebrows from '../src/components/Products/comboHairBeardEyeBrows';
import ComboHairBeardTherapy from '../src/components/Products/comboHairBeardTherapy';
import ComboHairBeardTherapyEyeBrows from '../src/components/Products/comboHairBeardTherapyEyeBrows';
import ComboHairEyebrows from '../src/components/Products/comboHairEyebrows';

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
      <h1>Our Services</h1>
        <Widget>    
          <Widget.Header>               
            <Hair />          
          </Widget.Header>
          <Widget.Header>
            <Beard />        
          </Widget.Header>
          <Widget.Header>
            <BeardTherapy />        
          </Widget.Header>
          <Widget.Header>
            <Eyebrows />        
          </Widget.Header>
          <Widget.Header>
            <BeardPigmentation />        
          </Widget.Header>
          <Widget.Header>
            <HairPigmentation />        
          </Widget.Header>
          <Widget.Header>
            <ProgressiveTreatmentHair />        
          </Widget.Header>
        </Widget>
        <h1>Combos</h1>
        <Widget>
          <Widget.Header>
            <ComboHairBeard />
          </Widget.Header>
          <Widget.Header>
            <ComboHairBeardEyebrows />
          </Widget.Header>
          <Widget.Header>
            <ComboHairBeardTherapy />
          </Widget.Header>
          <Widget.Header>
            <ComboHairBeardTherapyEyeBrows />
          </Widget.Header>
          <Widget.Header>
            <ComboHairEyebrows />
          </Widget.Header>
        </Widget>
      </Container>
    </Background>
  );
}
