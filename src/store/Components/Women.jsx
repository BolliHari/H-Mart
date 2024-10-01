import React from 'react';
import {womanData} from './data/woman';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Women = () => {
  const { addToCart } = useCart();
    const FiveWomenImages = womanData.slice(0,6);
  return (
    <>   
        <div className='bannerBox'>
            <img src="./assets/LadiesBanner.gif" alt="banner" />
        </div>
        <div className='proHeading'>
            <h2 className='Heading1'>Woman Fashion</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveWomenImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/woman/${item.id}`}>
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

export default Women
