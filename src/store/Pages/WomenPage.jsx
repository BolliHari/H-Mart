import React from 'react';
import { womanData } from '../Components/data/woman';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const WomenPage = () => {
  const { addToCart } = useCart();
  return (
    <>  
        <div className='proHeading'>
            <h2 className='Heading1'>Featured Mobiles</h2>
            <p className='Heading2'>See More </p>
        </div>
        <div className='pageSection'>
            {womanData.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <Link to={`/woman/${item.id}`}>
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

export default WomenPage
