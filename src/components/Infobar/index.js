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
  #info-bar svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.color1}
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
    #info-bar svg {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.792 21.804"><path d="M563.675,379.453a18.418,18.418,0,0,0,8,8.022c.776-.777,1.581-1.533,2.327-2.343a1.771,1.771,0,0,1,1.955-.539,27.679,27.679,0,0,0,3.715.592c.995.1,1.431.459,1.438,1.443.01,1.286.012,2.572,0,3.857-.009.932-.47,1.366-1.414,1.374a20.624,20.624,0,0,1-20.063-17.032,31.048,31.048,0,0,1-.3-3.383,1.191,1.191,0,0,1,1.327-1.375q2-.025,4.009,0c.845.011,1.22.471,1.323,1.323.162,1.345.352,2.691.634,4.014a1.515,1.515,0,0,1-.4,1.575C565.365,377.8,564.52,378.631,563.675,379.453Z" transform="translate(-559.323 -370.057)" fill="currentColor"/></svg>
                    <div>
                        <div>+44 7745 544970</div>
                        <small>Get in Touch</small>
                    </div>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24.012"><path d="M288.118,127.307h-2.163v-2.172h2.191a10.038,10.038,0,0,1,2.836-5.87,9.881,9.881,0,0,1,5.848-2.845v-2.207h2.218v2.154c4.909.919,7.8,3.785,8.753,8.751h2.153v2.17h-2.147c-.918,4.931-3.8,7.832-8.751,8.766v2.171H296.9v-2.163C291.974,135.15,289.058,132.278,288.118,127.307Zm9.837,6.571a7.665,7.665,0,1,0-7.659-7.654A7.685,7.685,0,0,0,297.955,133.878Zm-.014-12.044a4.379,4.379,0,1,0,4.4,4.377A4.386,4.386,0,0,0,297.941,121.833Z" transform="translate(-285.955 -114.213)" fill="currentColor"/></svg>
                    <div>
                        <span>17 Merton Road</span>
                        <small>BS7 8TL - Bristol</small>
                    </div>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24.012 24.012"><path d="M137.188,360.995a12.006,12.006,0,1,1-12.014,11.994A12.039,12.039,0,0,1,137.188,360.995Zm9.64,12.042a9.648,9.648,0,1,0-9.686,9.612A9.628,9.628,0,0,0,146.828,373.037Zm-4.557,4.907.872-1.419-5.425-3.23v-6.225h-1.7v7.122Z" transform="translate(-125.174 -360.995)" fill="currentColor"/></svg>
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