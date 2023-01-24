import React from 'react'
// import { Link } from 'react-router-dom'
import logo from "../../Asset/Logonetflix.png"

function NavBar() {
  return (
    <div style={{display:"flex",width:"100%"}}>
    <div className="nav-left-side"style={{display:"flex",justifyContent:"space-evenly",width:"50%"}} >
    <div className="logo">
         <img style={{height:"30px" }} src={logo} alt="" />
        </div>
        <div className="nav-home">
          Home
        </div>
        <div className="nav-tv">
          TV Shows
        </div>
        <div className="nav-cinema">
          Movies
        </div>
    </div>
        
    </div>
  )
}

export default NavBar