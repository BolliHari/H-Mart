import React from 'react';
import {furnitureData} from './data/furniture';

const Funiture = () => {
    const FiveFunitureImages = furnitureData.slice(0,6);
  return (
    <>   
        <div className='proHeading'>
            <h2 className='Heading1'>Funiture</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveFunitureImages.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <img src={item.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.model}</h5>
                        <a href="#" className="btn btn-primary">Add To Cart</a>
                      </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Funiture
