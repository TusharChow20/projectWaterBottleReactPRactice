const getCatFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalstrorage = (cart)=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}


const addItemToCartLocalStorage = (id) =>{
    const cart = getCatFromLocalStorage();
    const newCart = cart.push(id);
    saveCartToLocalstrorage(newCart)

}

export {getCatFromLocalStorage,addItemToCartLocalStorage}