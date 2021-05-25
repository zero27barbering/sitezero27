import React, {Component} from 'react';
import styled from 'styled-components';
import {Title} from "../Products";
import locations from "../../../locations.json";
import Button from "../button";
import ModalMap from "../ModalMap";
import MapEmbed from "../MapEmbed";
import {renderToStaticMarkup} from "react-dom/server";

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.color2};
  border-radius: 15px;
  border: 2px solid ${({theme}) => theme.colors.color1};
   /* nbh 
    */
  & > div {
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & section {
    margin: 2rem 0;
    text-align: center;
  }
  h4 {
    text-align: center;
    margin-bottom: 0;
  }
  small {
    color: #989898;
    display: block;
  }
  & button {
    padding: 10px 15px;
    width: max-content;
  }
  & svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }
`

const Row = styled.div`
  justify-content: center;
  --bs-gutter-y: 50px;
`



const location = locations.map((locations) => {

    function handleClick() { //abre o modal
        let bsModal = new bootstrap.Modal(document.getElementById('exampleModal'), { keyboard: true })
        bsModal.show()
    }

    function handleHover(e) { //adiciona ao modal o mapa correspondente ao botão a ser clicado
        let section = e.target.previousSibling
        let num = section.getAttribute('data-number')
        let addr = section.getAttribute('data-address')
        document.querySelector('#exampleModal .modal-body').innerHTML = renderToStaticMarkup(<MapEmbed number={num} address={addr} />)
    }

    return (
        <Container key={locations.id} className="col-12 col-lg-4">
            <div>
                <h4>{ locations.city }</h4>
                <section data-number={ locations.number } data-address={ locations.address }>
                    <small>{` ${locations.number} ${locations.address} | ${locations.postalCode} `}</small>
                    <small>{` ${locations.county} `}</small>
                    <small>{` ${locations.city}, ${locations.country} `}</small>
                </section>
                <Button onClick={ handleClick } onMouseEnter={ handleHover }>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" /></svg>
                    <span>View on the map</span>
                </Button>
            </div>
        </Container>
    )
})

export default class Locations extends Component {
    render() {
        return (
            <section id="locations">
                <Title style={{marginTop: 100 + 'px'}}>Locations</Title>
                <Row className="row">
                    { location }
                </Row>
            </section>
        )
    }
}