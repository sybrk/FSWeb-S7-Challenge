import React from "react";
import BigPicture from "./BigPicture";
import styled from "styled-components";

const Home = () => {

    const Div = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px
    `
    const H2 = styled.h2`
        color: black;
        margin: 0 auto;
        text-align: center;
    `

    const Button = styled.button`
        margin: 0 auto;
        border: solid black;
        border-radius: 10px;
        background-color: dimgray;
        font-size: large;
    `
    
    return (
        <>
            <Div>
                <H2>Order Your Pizza Before Coding</H2>
                <Button onClick={() => window.location.href="/pizza"}>Order Now</Button>
            </Div>
            <BigPicture />
        </>
    )
}

export default Home