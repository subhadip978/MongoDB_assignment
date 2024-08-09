import React from 'react'
import '../App.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Add = () => {
	const navigate=useNavigate();
	const [input,setInput]=useState({
		title:"",
		imageurl:"",
		price:0,
		description:"",
		product:""

	});


const handleChange=(e)=>{
 setInput((prev)=>({...prev, [e.target.name]:e.target.value}) );
}



	


		const handleClick=async (e)=>{
			e.preventDefault();
			try{
			  const res=await axios.post("/api/createproduct",input)
			  console.log(res.data)
			  navigate("/");
			}
		  
			catch(err){
			  console.log(err);
			}

	}


  return (
	<div className='addcontainer'>

		<h1>CREATE PRODUCT</h1>

			<div className='primaryaddcontainer' >

			{/* <form action=""> */}

			<input type="text" name="title" 	placeholder='Enetr title name'			 onChange={handleChange}	id="" />
			<input type="text" name="imageurl" 	placeholder='Enter image url'			 onChange={handleChange}	id="" />
			<input type="text" name="price" 	placeholder='Enter the price'			 onChange={handleChange}		id="" />
			<input type="text" name="description" placeholder='enter description'     onChange={handleChange}	 id="" />
			<input type="text" name="product" placeholder='enter product name'        onChange={handleChange}	 id="" />
			{/* </form> */}
		</div>
		<button onClick={handleClick} >Add Product</button>




	</div>
  )
}

export default Add ;