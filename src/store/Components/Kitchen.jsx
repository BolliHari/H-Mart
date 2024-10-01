import React from 'react';
import {kitchenData} from './data/kitchen';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Kitchen = () => {
  const { addToCart } = useCart();
    const FiveKItchenImages = kitchenData.slice(0,6);
  return (
    <>   
        <div className='proHeading'>
            <h2 className='Heading1'>Kitchens</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveKItchenImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/kitchen/${item.id}`}>
                        <img src={item.image} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.model}</h5>
                        <a href="#" className="btn btn-primary" onClick={()=>addToCart(item)}>Add To Cart</a>
                      </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Kitchen
