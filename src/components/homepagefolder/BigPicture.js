import React from "react";
import pizzaBigImage from "./../../assets/img/Pizza.jpg";
import { Link } from "react-router-dom";
let BigPicture = () => {
  return (
    <section>
      <img src={pizzaBigImage} alt="Pizza" width={400} />
      <Link to="/pizza">Pizza?</Link>
    </section>
  );
};
export default BigPicture;
