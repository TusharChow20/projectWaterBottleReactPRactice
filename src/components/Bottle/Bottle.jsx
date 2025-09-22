import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;

  return (
    <div className="card bottle">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>Price: ${price}</h3>
      <h4>Available: {stock}</h4>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
