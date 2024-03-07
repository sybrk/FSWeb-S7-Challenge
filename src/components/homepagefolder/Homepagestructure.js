import React from "react";

import BigPicture from "./BigPicture";
import PizzaItems from "./PizzaItems";
import Header from "./Header";

let HomePageFunction = () => {
  //https://github.com/swoopertr/FSWeb-S7-Challenge/blob/main/Assets/Homepage.png
  return (
    <>
      <Header />

      <BigPicture />
      
      <PizzaItems />
    </>
  );
};
export default HomePageFunction;
