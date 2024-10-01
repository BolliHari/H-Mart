import React from 'react';
import { watchData } from '../Components/data/watch';
import { useParams} from 'react-router-dom';
import Watch from '../Components/Watch';
import { useCart } from '../CartContext';

const WatchSingle = () => {
  const { addToCart} = useCart();  // Importing the useContext hook and the addToCart function from CartContext.js
    const { id } = useParams();
    const product = watchData.find(item => item.id === id);
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
      <Watch />
    </>
  )
}

export default WatchSingle
