import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../CartContext';


const Navbar = () => {
  const {cartItems} = useCart();
  return (
    <>
      <div className='navbar'>
        <div className='left'>
        <div className='shoplogo'>
          <img src='../Design-removebg-preview.png' alt='logo' />
        </div>
      </div>
      <div className='center'>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>More</li>
          </ul>
      </div>
      <div className='search'>
        <input type="text" placeholder='Search...' className='search-bar'/>
      </div>
      <div className='right'>
          <div>
            <button className='btn btn-primary sign-btn'>SignIn/SignUp</button>
          </div>
          
            <Link to='/cart' className='link2'>
              <div className='cart'>Cart
              <span className='badge'>{cartItems.length}</span>
              </div>
            </Link>
          
      </div>
      </div>
      <div className='subMenu'>
        <ul>
          <NavLink to='/' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Home</li></NavLink>
          <NavLink to='/mobile' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Mobiles</li></NavLink>
          <NavLink to='/mens' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Mens</li></NavLink>
          <NavLink to='/womens' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Womens</li></NavLink>
          <NavLink to='/ac' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>AC's</li></NavLink>
          <NavLink to='/fridges' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Fridges</li></NavLink>
          <NavLink to='/tv' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>T.V's</li></NavLink>
          <NavLink to='/kitchen' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Kitchen</li></NavLink>
          <NavLink to='/laptops' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Laptops</li></NavLink>
          <NavLink to='/watches' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Watches</li></NavLink>
          <NavLink to='/speakers' className={(e) => {return e.isActive?"link":""}} style={{"text-decoration": "none","color":"#000"}}><li>Speakers</li></NavLink>
        </ul>
      </div>
    </>
  )
}

export default Navbar
