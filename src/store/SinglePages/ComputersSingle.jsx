import React from 'react';
import {computerData} from '../Components/data/computers';
import { useParams } from 'react-router-dom';
import Computers from '../Components/Computers';
import { useCart } from '../CartContext';

const ComputersSingle = () => {
  const { addToCart } = useCart();
    const { id } = useParams();
    const product = computerData.find((item) => item.id === id);
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
      <Computers />
    </>
  )
}

export default ComputersSingle
