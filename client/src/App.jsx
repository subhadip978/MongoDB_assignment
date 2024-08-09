import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Add from './pages/Add'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='app'>


      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/cart" element={<Cart/>}/>

      
        </Routes>
        </BrowserRouter>



    </div>
  )
}

export default App