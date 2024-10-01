import React from 'react';
import { useCart } from './CartContext';

const UserCart = () => {
    const { cartItems , removeFromCart} = useCart();
  return (
    <>
        <h2 className='cart-title'>Your Cart</h2>
        {cartItems == 0? <p className='cart-subtitle'>Your Cart is Empty</p>:null}
        {cartItems.map((item) =>{
            return(
                <div className='cart-section'>
                    <div className="cart-img">
                        <img src={item.image} alt="image" />
                    </div>
                     <div className="cart-info">
                        <div>
                            <h4>{item.product}</h4>
                            <h3>{item.model}</h3>
                            <p>Price: ${item.price}</p> 
                        </div>
                        <div className='cart-btn'>
                            <button className='btn btn-danger' onClick={()=>removeFromCart(item)}>Remove</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default UserCart
