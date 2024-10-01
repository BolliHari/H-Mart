import React from 'react';
import {acData} from './data/ac'
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Ac = () => {
  const { addToCart } = useCart();
    const FiveAcImages = acData.slice(0,6);
  return (
    <>  
        <div className='proHeading'>
            <h2 className='Heading1'>Featured Air Conditioners</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveAcImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/ac/${item.id}`}>
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

export default Ac
