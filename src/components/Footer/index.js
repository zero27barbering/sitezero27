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
  
  nav img {
    height: 100px;
    width: auto;
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
                <span>Copyright © 2021 – Zero27 Barbering</span>
            </div>
            <div>
                <img src="/img/nav-logo.svg" alt="Logo"/>
            </div>
            <div>
                <span>Follow me on <a href="insta">Instagram</a></span>
            </div>
        </Container>
    )
}