import React from 'react';
import {menData} from './data/men'
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Men = () => {
    const {addToCart} =useCart();
    const FiveMenImages = menData.slice(0,6);
  return (
    <>   
        <div className='bannerBox'>
            <img src="./assets/GentsBanner.gif" alt="banner" />
        </div>
        <div className='proHeading'>
            <h2 className='Heading1'>Men Fashion</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveMenImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/men/${item.id}`}>
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

export default Men
