import React from "react";
// import { Link } from 'react-router-dom'
import logo from "../../Asset/Logonetflix.png";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import {IoIosNotifications} from "react-icons/io"
import avatar from "../../Asset/Netflix-avatar.png"
function NavBar() {
  const navigate = useNavigate()
  return (
    <div id="nav-bar-main" style={{ display: "flex", width: "100%" }}>
      <div className="nav-left-side">
        <div onClick={()=>{navigate("/home")}} className="logo">
          <img style={{ height: "30px" }} src={logo} alt="" />
        </div>
        <div className="nav-home">
          <Button onClick={()=>{navigate("/home")}}>Home</Button>
        </div>
        <div className="nav-tv"><Button onClick={()=>{navigate("/tv")}}>TV Shows</Button></div>
        <div className="nav-cinema"><Button onClick={()=>{navigate("/cinema")}}>Movies</Button></div>
      </div>
      <div className="nav-right-side">
        <div className="search-button">
        <input type="text" placeholder="Search Here" />
         <Button><FaSearch/></Button>
        </div>
        <div className="kids">
            <Button>Kids</Button>
        </div>
        <div style={{marginLeft:"20px",fontSize:"25px"}} className="notification">
           <IoIosNotifications style={{color:"white"}}/>
        </div>
        <div style={{marginLeft:"40px"}} className="avatar">
           <img style={{height:"30px",marginTop:"5px"}} src={avatar} alt="loading" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
