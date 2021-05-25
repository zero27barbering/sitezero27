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
    color: ${({theme}) => theme.colors.color1};;
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
  #insta-bar svg {
    margin-left: 60px;
    margin-right: 12px;
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
      color: ${({ theme }) => theme.colors.contrastText}
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
                    <img width="20" height="20" color="#FF5722" src="/img/icons/location.svg" alt="Local"/>
                    <div>
                        <span>17 Merton Road</span>
                        <small>BS7 8TL - Bristol</small>
                    </div>
                </div>
                <div>
                    <img width="20" height="20" src="/img/icons/time.svg" alt="Phone"/>
                    <div>
                        <div>Open Mon - Fri</div>
                        <small>9:00am - 7:00pm</small>
                    </div>
                </div>
                <div id="insta-block">
                    <img src="/img/icons/insta.svg" alt="Insta"/>
                    <span>Follow me on Instagram</span>
                </div>
            </section>
            <section id="insta-bar">
                <svg height="20" width="20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                <span>Follow me on Instagram</span>
            </section>
        </Container>
    )
}