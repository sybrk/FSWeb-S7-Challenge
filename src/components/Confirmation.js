import React from 'react';
import pizzaImage from './../assets/img/PizzaOther.jpg';
import styled from 'styled-components';


const MyDivCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const ConfirmationPage=(props)=> {
    
    const urlParams = new URLSearchParams(window.location.search);
    const mySizeParam = urlParams.get('size');
    const myNameParam = urlParams.get('name');
    const mySoucesParam = urlParams.get('sauce');
    const myToppingsParam = urlParams.get('toppings');
    const mySubstitueParam = urlParams.get('substitue');
    const myNotesParam = urlParams.get('notes');
    console.log(mySizeParam);
    

    return (
        <MyDivCol>
            <img src={pizzaImage} alt='Mükemmel pizza' width={400}/>
             <h2>Order Confirmation</h2>
            
            <ul>
                <li> Customer Name: {" " + myNameParam} </li>
                <li> Size:{" " +  mySizeParam} </li>
                <li> Sauce:{" " + mySoucesParam} </li>
                <li> Toppings:{" " + myToppingsParam} </li>
                <li> Substitute:{" " + mySubstitueParam} </li>
                <li> Special Note:{" " + myNotesParam} </li>
                </ul>
                <p>Your order is being prepared now.</p>

            </MyDivCol>
    )
}
export default ConfirmationPage;