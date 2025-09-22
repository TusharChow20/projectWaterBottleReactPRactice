const getCatFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return Array.isArray(storedCart) ? storedCart : [];
  }
  return [];
};

const saveCartToLocalstrorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  let cart = getCatFromLocalStorage();
  let newCart = [...cart, id];
  saveCartToLocalstrorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCatFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalstrorage(remainingCart);
};

export {
  getCatFromLocalStorage,
  addItemToCartLocalStorage,
  removeFromLocalStorage,
};
