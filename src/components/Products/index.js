import React, { Component } from 'react';
import styled from 'styled-components';
import ButtonPd from '../buttonPd';
import products from '../../../products.json';

export const Container = styled.div`
  margin: 20px;
`;

const product = products.map((products) => {
  return (
      <Container key={products.id}>
        <h3>{products.name} - {products.price}</h3>        
        <a href={`${products.link}`}>
          <ButtonPd>Book Now</ButtonPd>
        </a>
        <h3>{products.time}</h3>
      </Container>
    )
  }
)

export default class Products extends Component {
  render() {
    return (
      <div>
        <h2>Services & Pricing</h2>
        {product}
      </div>      
    )
  }
}