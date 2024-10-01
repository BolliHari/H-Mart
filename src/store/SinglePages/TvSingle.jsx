import React from 'react';
import { tvData } from '../Components/data/tv';
import { useParams } from 'react-router-dom';
import Tv from '../Components/Tv';
import { useCart } from '../CartContext';

const TvSingle = () => {
  const { addToCart } = useCart();
    const { id } = useParams();
  const product = tvData.find((item) => item.id === id);
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
      <Tv />
    </>
  )
}

export default TvSingle
