import styled from 'styled-components';
import React from "react";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 0;
  font-size: 12px;
  
  a {
    color: ${({ theme }) => theme.colors.color1};
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
    & div:not(:first-child) {
      display: none;
    }
  }
`

export default function Footer() {
    return (
        <Container className="container">
            <div>
                <span>Copyright © 2021 – Rodrigo Carvalho</span>
            </div>
            <div>
                <img src="/img/logo-carvalho.svg" alt="Logo"/>
            </div>
            <div>
                <span>Follow me on <a href="insta">Instagram</a></span>
            </div>
        </Container>
    )
}