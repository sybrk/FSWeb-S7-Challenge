import React from 'react';
import pizzaImage from './../assets/img/Pizza.jpg';

const ConfirmationPage=(props)=> {
    
    const urlParams = new URLSearchParams(window.location.search);
    const mySizeParam = urlParams.get('size');
    const myNameParam = urlParams.get('name');
    console.log(mySizeParam);
    

    return (
        <div>
            <img src={pizzaImage} alt='Mükemmel pizza' width={400}/>
             <h2>Sipariş Onayı</h2>
            
            <ul>
                <li> CustomerName:{myNameParam} </li>
                <li> size:{ mySizeParam} </li>
                <li> souces:{props.souces} </li>
                <li> toppings:{props.toppings} </li>
                <li> substitute:{props.substitute} </li>
                <li> special_instructions:{props.special_instructions} </li>
                </ul>
                <p> siparişiniz başarı ile teslim edilmiştir</p>

            </div>
    )
}
export default ConfirmationPage;