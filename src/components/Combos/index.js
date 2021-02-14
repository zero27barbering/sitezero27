import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonPd from '../buttonPd';
import combos from '../../../combos.json';

export const Container = styled.div`
  margin: 20px;
`;

const combo = combos.map((combos) => {
  return (
      <Container key={combos.id}>
        <h3>{combos.name} - {combos.price}</h3>
        <a href={`${combos.link}`}>
          <ButtonPd>Book Now</ButtonPd>
        </a>
      </Container>
    )
  }
)

export default class Combos extends Component {
  render() {
    return (
      <div>
        <h2>Offers & Combos</h2>
        {combo}
      </div>      
    )
  }
}