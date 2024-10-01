import React from 'react';
import { fridgeData } from '../Components/data/fridge';
import { useParams } from 'react-router-dom';
import Fridge from '../Components/Fridge';
import { useCart } from '../CartContext';

const FridgeSingle = () => {
  const { addToCart } = useCart();
    const { id } = useParams();
    const product = fridgeData.find((item) => item.id === id);
  return (
    <>  
      <div className='pro-page'>
        <div className='pro-img'>
          <img src={product.image} alt="image" />
        </div>
        <div className='pro-details'>
          <h2>{product.model}</h2>
          <h3>${product.price}</h3>
          <p>{product.description}</p>
          <button className='btn btn-primary'>Buy Now</button> &nbsp;
          <button className='btn btn-danger' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <Fridge />
    </>
  )
}

export default FridgeSingle
