import React, { use, useState } from 'react';
import Bottle from './Bottle/Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {

    const [purchase, setPurchase] =useState([])

    const bottles = use(bottlesPromise)

    const handleAddToCart = (bottle)=>{
        console.log(bottle);
        
    }
    // console.log(bottles)
    return (
        <div>
             <h2>Bottles: {bottles.length}</h2>
             <div className='bottles-container'>
                {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
             }
             </div>
             
        </div>
    );
};

export default Bottles;