import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import "./Bottles.css";
import {
  addItemToCartLocalStorage,
  getCatFromLocalStorage,
  removeFromLocalStorage,
} from "../utilities/localStorage";
import Cart from "./component/cart";
const Bottles = ({ bottlesPromise }) => {
  const [purchase, setPurchase] = useState([]);

  const bottles = use(bottlesPromise);

  useEffect(() => {
    const storedCartIds = getCatFromLocalStorage();
    // console.log(storedCartIds,bottles );

    const storedCart = [];
    storedCartIds.forEach((ids) => {
      // console.log(ids)
      const cartBottle = bottles.find((bottle) => bottle.id === ids);
      // console.log(cartBottle);

      if (cartBottle) {
        storedCart.push(cartBottle);
      }

      setPurchase(storedCart);
    });
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...purchase, bottle];
    setPurchase(newCart);
    console.log(bottle.id);

    addItemToCartLocalStorage(bottle.id);
  };
  // console.log(bottles)
  const handleRemoveFromCart = (id) => {
    const remainingCart = purchase.filter((bottle) => bottle.id !== id);
    setPurchase(remainingCart);
    removeFromLocalStorage(id);
  };

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <p>Added to Cart:{purchase.length}</p>
      <Cart cart={purchase} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
