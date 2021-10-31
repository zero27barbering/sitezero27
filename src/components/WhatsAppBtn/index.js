import React from 'react';
import styled from 'styled-components';

export const Btn = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75em 1.5em;
  color: white;
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.color1};
  border-radius: 50px;
  transition: all 250ms ease;
  border: 1px solid ${({theme}) => theme.colors.color1};
  position: fixed;
  bottom: 85px;
  right: 20px;
  z-index: 2;
  
  &:hover {
    color: white;
    background-color: ${({theme}) => theme.colors.color3};
  }
  
  & img {
    margin-right: 10px;
  }
  
  &:active {
    transform: scale(0.9);
  }
  
`

export default function WhatsAppBtn() {
    return (
        <Btn
            href="https://api.whatsapp.com/send?phone=+447745544970&text=Hello,%20I%20would%20like%20to%20make%20an%20appontment%2E"
            target="_blank"
            rel="noopener noreferrer">
            <img height="25" width="25" src="/img/icons/wpp.svg" alt="WhatsApp"/>
            <span>Book via WhatsApp</span>
        </Btn>
    );
}