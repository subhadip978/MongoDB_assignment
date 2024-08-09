import React from 'react'
import '../App.css';
import Add from '../pages/Add';

const Navbar = () => {
  return (
	<div className='navbarcontainer'>
		
		<ul className='itemlist'>
	<li><a href="/add">ADD Product</a></li>
    <li><a href="/cart">CART</a></li>
    <li><a href="/order">ORDER</a></li>
    <li><a href="/about">ABOUT</a></li>
			
		</ul>
		
		
		</div>
  )
}

export default Navbar