import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Coin from "./components/Coin"  
const NavBar = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/AppCripto" element={<Home/>} />
                <Route path='/AppCripto/:id' element={<Coin/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default NavBar