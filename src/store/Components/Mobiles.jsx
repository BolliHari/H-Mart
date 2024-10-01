import React from 'react';
import { mobileData } from './data/mobiles';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Mobiles = () => {
  const { addToCart } = useCart();
    const FiveMobileImages = mobileData.slice(0, 6);
  return (
    <>  
        <div className='proHeading'>
            <h2 className='Heading1'>Featured Mobiles</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveMobileImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/mobile/${item.id}`}>
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

export default Mobiles
