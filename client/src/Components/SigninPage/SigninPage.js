import React from 'react'
import logo from "../../Asset/Logonetflix.png"
import "./SigninPage.css"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function SigninPage() {
    const navigate = useNavigate();
    const goHome=()=>{
           navigate('/home')
    }
  return (
    <div className='Sign-main'>
      <div className="nav">
        <div className="logo">
         <img style={{height:"50px" }} src={logo} alt="" />
        </div>
        <div className="login-route">
        <Button style={{backgroundColor:"red"}} variant="contained">Sign in</Button>
        </div>
      </div>

    <div className="text-field-div">
        <h1>Unlimited moive,TV </h1>
        <h1>shows ,and more</h1>
         <h2>Watch anywhere. cancel anytime</h2>
         <h3>React to watch ? Enter your email to create or restart your membership</h3>
         <div className="text-field">
         <input style={{backgroundColor:"white",border:"none",width:"550px",paddingLeft:"15px"}}  placeholder="Email address" />
         <Button className='text-field-btn' onClick={()=>{goHome()}} style={{backgroundColor:"red",fontSize:"20px"}} variant="contained">Get Started  </Button>
         </div>
    </div>
    </div>
  )
}

export default SigninPage