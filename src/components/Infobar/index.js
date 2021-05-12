import styled from 'styled-components';
import React from "react";

export const Container = styled.div`
  display: flex;
  
  #info-bar {
    position: relative;
    font-size: 18px;
    padding-right: 120px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 65%;
    background-color: ${({theme}) => theme.colors.color3};
    margin-top: -85px;
    height: 175px;
  }
  #info-bar img {
    margin-right: 16px;
  }
  #info-bar a {
    color: white;
    text-decoration: none;
  }
  #info-bar span {
    display: block;
  }
  #info-bar small {
    color: #989898;
    font-size: 16px;
  }
  #info-bar > :not(:last-child) {
    display: flex;
  }
  #info-bar > div:nth-child(2) {
    margin-left: 85px;
    margin-right: 85px;
  }
  #insta-bar {
    background-color: ${({theme}) => theme.colors.color1};
    width: 35%;
    display: flex;
    align-items: center;
  }
  #insta-bar img {
    padding-left: 60px;
    padding-right: 12px;
  }
  #insta-block {
    display: none;
    font-size: 10px;
    background-color: ${({theme}) => theme.colors.color1};
  }
  #insta-block img {
    height: 15px;
    width: 15px;
  }
  
  @media screen and (max-width: 1300px) {
    #info-bar > * {
      margin-left: 0px !important;
      margin-right: 0px !important;
      padding: 16px;
    }
  }
  @media screen and (max-width: 1000px) {
    #insta-bar {
      display: none;
    }
    #insta-block {
      display: flex;
    }
    #info-bar {
      justify-content: space-evenly;
      width: 100%;
      height: auto;
      padding: 25px;
      margin: initial;
    }
  }
  @media screen and (max-width: 500px) {
    margin-right: -12px;
    
    #info-bar > * {
      padding: 12px;
    }
    #info-bar, a {
      font-size: 12px;
    }
    #info-bar img {
      height: 12px;
      width: 12px;
      margin-right: 10px;
    }
    #info-bar small {
      font-size: 10px;
    }
    #info-bar > div:nth-child(1) {
      order: 3;
    }
    #info-bar > div:nth-child(2) {
      order: 2;
    }
    #info-bar > div:nth-child(3) {
      order: 1;
    }
    #info-bar > div:nth-child(4) {
      order: 4;
    }
  }
`;

export default function Infobar() {
    return (
        <Container>
            <section id="info-bar">
                <div>
                    <img width="20" height="20" src="/img/icons/phone.svg" alt="Phone"/>
                    <div>
                        <div><a href="tel:447745544970">+44 7745 544970</a></div>
                        <small>Get in Touch</small>
                    </div>
                </div>
                <div>
                    <img width="20" height="20" src="/img/icons/location.svg" alt="Local"/>
                    <div>
                        <span>39 Millground Road</span>
                        <small>BS138NE - Bristol</small>
                    </div>
                </div>
                <div>
                    <img width="20" height="20" src="/img/icons/time.svg" alt="Phone"/>
                    <div>
                        <div>Open Mon - Sat</div>
                        <small>8:00am - 8:00pm</small>
                    </div>
                </div>
                <div id="insta-block">
                    <img src="/img/icons/insta.svg" alt="Insta"/>
                    <span>Follow me on Instagram</span>
                </div>
            </section>
            <section id="insta-bar">
                <img src="/img/icons/insta.svg" alt="Insta"/>
                <span>Follow me on Instagram</span>
            </section>
        </Container>
    )
}