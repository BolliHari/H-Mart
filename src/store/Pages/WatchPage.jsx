import React from 'react';
import { watchData } from '../Components/data/watch';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const WatchPage = () => {
  const { addToCart } = useCart();
  return (
    <>  
        <div className='proHeading'>
            <h2 className='Heading1'>Featured Mobiles</h2>
            <p className='Heading2'>See More </p>
        </div>
        <div className='pageSection'>
            {watchData.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/watch/${item.id}`}>
                      <img src={item.image} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{item.model}</h5>
                        <p>Price: ${item.price}</p>
                        <a href="#" className="btn btn-primary" onClick={()=>addToCart(item)}>Add To Cart</a>
                      </div>
                    </div>
                )
            })}
       </div>
    </>
  )
}

export default WatchPage
