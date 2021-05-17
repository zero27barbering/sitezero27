import React, {Component} from 'react';
import styled from 'styled-components';
import ButtonPd from '../buttonPd';
import products from '../../../products.json';


export const Title = styled.h2`
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0;
  margin-bottom: 80px;

  &::after {
    content: url("/img/icons/div.svg");
  }

  @media (min-width: 500px) {
    & {
      font-size: 42px;
    }
  }

`;

export const Container = styled.div`
  display: flex;
  padding: 15px 72px;

  & #products-dt {
    display: none;
  }
  & #products-m {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 500px) {
    & #products-dt {
      display: flex;
    }
    & #products-m {
      display: none;
    }
    h2 {
      font-size: 42px;
    }
  }
  @media (max-width: 1200px) {
    & #products-dt span {
      margin-right: 0 !important;
    }
  }
  
  & #products-dt h3 {
    font-size: 18px;
    color: white;
    display: flex;
    margin-top: 0;
  }
  & #products-dt h3::after {
    content: '';
    display: flex;
    flex: 1;
    border-bottom: 1px dashed ${({theme}) => theme.colors.color1};
    margin-left: 16px;
    margin-right: 16px;
  }
  & #products-dt span {
    color: #989898;
    display: inline-block;
    margin: 10px 40px 10px 0;
  }
  & #products-dt small {
    color: ${({ theme }) => theme.colors.color1};
  }
  
  /*===== Mobile CSS =====*/
  & #products-m > div:first-child  {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & #products-m h3 {
    display: flex;
    flex: 1;
  }
  & #products-m h3::after {
    content: '';
    display: flex;
    flex: 1;
    border-bottom: 1px dashed ${({theme}) => theme.colors.color1};
    margin-left: 10px;
    margin-right: 10px;
  }
  & #products-m > div:first-child span {
    color: ${({ theme }) => theme.colors.color1};
    font-size: 12px;
  }
  & #products-m > span {
    color: #989898;
    font-size: 10px;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  & #products-m button {
    font-size: 10px;
    width: 90px;
    margin-right: 15px;
  }
  & #products-m div:last-child span {
    color: ${({ theme }) => theme.colors.color1};
    font-size: 10px;
  }
`;

const product = products.map((products) => {
    return (
        <Container key={products.id} className="col-12 col-lg-6">
            <section id="products-dt">
                <div>
                    <h3>{products.name}</h3>
                    <span>
                        Lorem ipsum dolor sit amet et dolore magna
                        aliqua consectetur adipiscing elit phasellus.
                    </span>
                    <small>{` ${products.price} | ${products.time} `}</small>
                </div>
                <div>
                    <a href={`${products.link}`}>
                        <ButtonPd>Book Now</ButtonPd>
                    </a>
                </div>
            </section>

            <section id="products-m">
                <div>
                    <h3>{products.name}</h3>
                    <span>{products.price}</span>
                </div>
                <span>
                    Lorem ipsum dolor sit amet et dolore magna
                    aliqua consectetur adipiscing elit phasellus.
                </span>
                <div>
                    <a href={`${products.link}`}>
                        <ButtonPd>Book Now</ButtonPd>
                    </a>
                    <span>{` Duration: ${products.time} `}</span>
                </div>
            </section>
        </Container>
    )
})

export default class Products extends Component {
    render() {
        return (
            <section id="services">
                <Title>Services & Pricing</Title>
                <div className="row">
                    { product }
                </div>
            </section>
        )
    }
}