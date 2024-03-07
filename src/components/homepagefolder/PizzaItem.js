import React from "react";

const PizzaItem = (props) => {
  return (
    <div class="restaurant">
      <img src={props.img} alt={props.altTxt} />
      <p>{props.text}</p>
    </div>
  );
};

export default PizzaItem

