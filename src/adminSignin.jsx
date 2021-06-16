import Navbar  from "./Navbar"
import {connect} from 'react-redux'
import { useState } from "react"
import {verifyAdmin} from './store/actions'
import Footer from "./footer"


function AdminSignIn(props){
    const [email,setEmail]=useState()
    const [password,setPasssword]=useState()

    const sendData=(e)=>{
        e.preventDefault()
        props.verifyAdmin(email,password)
     }
return(
    <>
<Navbar/>
    <div className="row">
<div className="col-md-3"></div>
    <div className="col-md-4">
        <br /><br /><br /><br />
    <form>
        <h3>Sign in to add your hotel </h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address with @admin.com</label>
          <input  onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input  onChange={(e)=>setPasssword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group form-check">

        </div>
        <button onClick={(e)=>sendData(e)} type="submit" className="btn btn-primary">Sign in as Admin</button>
      </form>
     
      
      </div>
      </div>
      <br /><br /><br />
      <Footer/>
    </>
)
}
const mapDispatchToProps=(dispatch)=>({
    verifyAdmin:(email,pass)=>dispatch(verifyAdmin(email,pass))

})
export default connect(null,mapDispatchToProps)(AdminSignIn)
