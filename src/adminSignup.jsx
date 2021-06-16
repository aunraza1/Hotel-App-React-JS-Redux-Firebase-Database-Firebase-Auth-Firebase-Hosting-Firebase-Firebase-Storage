import Navbar  from "./Navbar"
import {Link} from 'react-router-dom'
import { useState } from "react"
import {connect} from 'react-redux'
import {addAdmin} from './store/actions'
import Footer from './footer'

function AdminSignUp(props){

    const [email,setEmail]=useState()
    const [password,setPasssword]=useState()


 const sendData=(e)=>{
    e.preventDefault()
    props.addAdmin(email,password)
 }   

return(
    <>
    
<Navbar/>
    <div className="row">
<div className="col-md-3"></div>
    <div className="col-md-5">
        <br /><br /><br /><br />

    <form>
        <h3>You Must Sign Up to Add Hotel</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address with @admin.com</label>
          <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input  onChange={(e)=>setPasssword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">

        </div>
        <button onClick={(e)=>sendData(e)} type="submit" className="btn btn-primary">Register Your-self as Admin</button>
      </form>
      <Link to={{pathname:'/AdminLogin'}}>Already a Admin ? Sign In Instead</Link>
      
      </div>
      </div>
      <br /><br /><br />
      <Footer/>
    </>
)
}

const mapDispatchToProps=(dispatch)=>({
    addAdmin:(email,pass)=>dispatch(addAdmin(email,pass))

})
export default connect(null,mapDispatchToProps)(AdminSignUp)