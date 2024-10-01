import React from 'react';
import {booksData} from './data/books';

const Books = () => {
    const FiveBooksData = booksData.slice(0, 6);
  return (
    <>   
        <div className='proHeading'>
            <h2 className='Heading1'>Books</h2>
            <p className='Heading2'>See More</p>
        </div>
        <div className='proSection'>
            {FiveBooksData.map((item) =>{
                return(
                    <div className="card" style={{"width": "14rem"}}>
                      <img src={item.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <a href="#" className="btn btn-primary">Add To Cart</a>
                      </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Books
