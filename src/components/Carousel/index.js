import styled from 'styled-components';
import React from "react";

export const Container = styled.div`
    flex: none;
`

export default function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="/img/background.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/img/background2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/img/background3.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/img/background4.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}