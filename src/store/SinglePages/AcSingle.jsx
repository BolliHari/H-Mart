import React from 'react';
import { acData } from '../Components/data/ac';
import Ac from '../Components/Ac';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';

const AcSingle = () => {
  const { addToCart} = useCart();
    const {id} = useParams();
    const product = acData.find((item) => item.id === id);
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
        <Ac />
      </>
  )
}

export default AcSingle





