import React from "react";
import styled from "styled-components";
import pizza1 from "../../assets/img/Pizza.png";
import pizza2 from "../../assets/img/PizzaOther.jpg"

const BigPicture = () => {

    const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 700px;
        flex-wrap: wrap;
        gap: 30px;
        margin: 0 auto;
    `
    const Img = styled.img`
        width: 400px;
        height: 300px;
        border-radius: 10px;
    `
    

    return (
        <>
            
            <Section>
                <Img src={pizza1}/>
                <Img src={pizza2}/>
                <Img src={pizza1}/>
                <Img src={pizza2}/>
                <Img src={pizza1}/>
                <Img src={pizza2}/>
            </Section>
        </>
        
    )
}

export default BigPicture