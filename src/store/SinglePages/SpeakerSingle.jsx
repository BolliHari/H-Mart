import React from 'react';
import { speakerData } from '../Components/data/speaker';
import { useParams } from 'react-router-dom';
import Speaker from '../Components/Speaker';
import { useCart } from '../CartContext';

const SpeakerSingle = () => {
  const { addToCart } = useCart();  // getting cart functions from CartContext
    const { id } = useParams();
    const product = speakerData.find((item) => item.id === id);
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
      <Speaker />
    </>
  )
}

export default SpeakerSingle
