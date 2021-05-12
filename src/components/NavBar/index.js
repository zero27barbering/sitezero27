import styled from 'styled-components';
import React from "react";

export const Container = styled.header`
    display: flex;
  
  nav {
    width: 100%;
    position: fixed;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
`

export default function NavBar() {
    return (
        <Container>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/img/logo-carvalho.svg" alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Container>
    )
}