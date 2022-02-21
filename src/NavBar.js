import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Coin from "./components/Coin"  
const NavBar = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path='/:id' element={<Coin/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    </Router>
  )
}

export default NavBar