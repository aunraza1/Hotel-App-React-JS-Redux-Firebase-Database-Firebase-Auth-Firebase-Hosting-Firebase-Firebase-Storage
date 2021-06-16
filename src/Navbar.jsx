import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {facebookLogin,googleLogin,sendloggedUser} from './store/actions'
import { useEffect, useState } from 'react'
import facebook from './Images/facebook.jpg'
import google from './Images/google.jpg'

function Navbar(props){

  const [loggedUser,setLoggedUser]=useState()
  
 
useEffect(()=>{
if(props && loggedUser){
  props.sendloggedUser(loggedUser)
}
})

const LoginFacebook=(e)=>{
  e.preventDefault()
  props.facebookLogin((data)=>setLoggedUser(data))
}

const loginGoogle=(e)=>{
  e.preventDefault()
  props.googleLogin((data)=>setLoggedUser(data))
}
 




  return(

     <>
     <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="navbar-brand text-white" href="#">BMJ Hotel App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to={ {pathname:'/'}}>Home <span className="sr-only">(current)</span></Link>
            </li>
            {props.loggedUser?<li className="nav-item active">
              <Link  className="nav-link text-white" to={{pathname:'/ShowBookings'}}>Your Bookings <span className="sr-only">(current)</span></Link>
            </li>:null}
            
           {props.loggedUser?null:
            <li className="nav-item dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                Sign in Via Social Links
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link onClick={(e)=>LoginFacebook(e)} className="dropdown-item" >   <img src={facebook} width="20"/>Facebook Login
              
                </Link>
                <Link onClick={(e)=>loginGoogle(e)} className="dropdown-item"> <img src={google} width="20"/>Google Login</Link>
                
              
               </div>
            </li>}
           <li className="nav-item active">
              <Link  className="nav-link text-white" to={{pathname:'/Admin'}}>Add Hotel <span className="sr-only">(current)</span></Link>
            </li>
           

           
          </ul>
       
        </div>
      </nav>
      {loggedUser? 
      <p>You are logged in as {loggedUser}</p>:null}
      
     </>
  )
}
const mapStateToProps=(state)=>({
  loggedUser:state.loggedUser
})

const mapDispatchToProps=(dispatch)=>({
  facebookLogin:(loggeduser)=>dispatch(facebookLogin(loggeduser)),
  googleLogin:(loggeduser)=>dispatch(googleLogin(loggeduser)),
  sendloggedUser:(loggedUser)=>dispatch(sendloggedUser(loggedUser))



})





export default connect(mapStateToProps,mapDispatchToProps)(Navbar)