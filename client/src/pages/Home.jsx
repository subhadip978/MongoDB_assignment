import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import axios from 'axios'
import{ useState,useEffect }from 'react'

import { Link } from 'react-router-dom'


const Home = () => {

	const [products,setProducts]=useState([]);
	const fetchProduct=async(e)=>{
		try{

			const res= await axios.get("/api/findallproducts");
			console.log(res);
			setProducts(res.data);
		}catch(error){
			console.log("error fetching products: ",error) ;
		}
	}



			const handleDelete=async(id)=>{
				try{
					
									const res=await axios.delete(`/api/deleteproduct/${id}`);
									console.log(products);
									setProducts((prevProducts) => prevProducts.filter((p) => p._id !== id));


				}catch(err){
					console.log(err);
				}

			}

	useEffect(()=>{
		fetchProduct()
	},[])



  return (
	<div className='container'>
		<Navbar/>
		{products && 
			products.map((p)=>(
				<div className='itemlist1' key={p._id}>
					<h2>{p.title}</h2>
					<img src={p.imageurl} alt="" srcSet="" />
					<p>${p.price}</p>
					<p>{p.description}</p>
					<p>{p.product}</p>


					<div className="btn">
					<button className='addtocart'>

						<Link to={`/addtocart/${p._id}`}>
							ADD to cart

						</Link>
						
						 </button>

					<button className='delete' onClick={()=>handleDelete(p._id)}> DELETE </button>

					</div>


				</div>
			)

			)
		}
	</div>
  )
}

export default Home