import styled from 'styled-components';
import style from '../../../style.json';
import WidgetContainer from '../Widget/container';
import Widget from '../Widget';
import Button from '../button';

export const Background = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.color2}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 900px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default function Header() {
  return (
    <Background backgroundImage={style.bg}>
      <WidgetContainer>
        <Widget>
          <Widget.Header>
            <div>
              <h3>Make your appointment</h3>
              <h1>I Will Make You Stylish</h1>
            </div>
          </Widget.Header>
          <Widget.Content>
            <Button><p>Services and Princing</p></Button>
          </Widget.Content>
        </Widget>
      </WidgetContainer>
    </Background>
  )
}