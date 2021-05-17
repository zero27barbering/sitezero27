import React from "react";
import styled from 'styled-components';
import style from '../../../style.json';
import WidgetContainer from '../Widget/container';
import Widget from '../Widget';
import Button from '../button';
import Carousel from "../Carousel";

export const Background = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  height: 900px;
  display: flex;
  /*flex: 1;*/

  @media screen and (max-width: 1000px) {
    
  }
  
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
      height: 600px;
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

export const Container = styled.div`
  .carousel-item img {
    height: 900px;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    & {
      margin-right: -12px;
    }
    .carousel-item img {
      height: 600px;
    }
  }
`

export default function Header() {
  return (
    <Container>
      <Carousel />
    </Container>
  )
}