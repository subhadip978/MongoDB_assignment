import React from 'react'
import { useState } from 'react'




const Cart = () => {
  const [products,setProducts]=useState([]);

  return (
	<div>
    Cart

      <div className="cartitem">

        {products && products.map((p)=>(

          <div className="item" key={p._id}>
            <p>{p.title}</p>
            <img src="" alt="" srcset="" />
            <p>{p.description}</p>
            <span>{p.quantity}</span>


          </div>

        ))}
      </div>
  
    </div>
  )
}

export default Cart
