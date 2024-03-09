import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
        display: flex;
        gap: 15px;
        margin: 10px auto;
        justify-content: center;
        align-items: center;
        background-color: dimgray;
        height: 25px;
        width: 200px;
        border: solid black;
        border-radius: 10px;
    `;

    const A = styled.a`
        font-size: large;
        font-weight: bold;
        text-decoration: none;
        color: black;

        &:hover {
            color: white;
        }
    `
    
const Navbar = () => {

    


    return (
        <Nav>
            <A href="/">Home</A>
            <A href="/pizza">Pizza</A>
        </Nav>
    )
}

export default Navbar