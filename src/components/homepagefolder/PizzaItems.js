import React from "react";
import { useEffect, useState } from 'react';
import PizzaItem from './PizzaItem';

const PizzaItems = () => {
    const[items, setItems] = useState([]);
    useEffect(()=>{
        
    },[]);
  return (
    <section>
      <h2>Food Delivery in Gotham City</h2>
    {items.map ((item, index) => 
    ( <PizzaItem data={{img: "a.jpg", text:"pizza description"}} />
    
    ))} 
    </section>
  );
};
export default PizzaItems;