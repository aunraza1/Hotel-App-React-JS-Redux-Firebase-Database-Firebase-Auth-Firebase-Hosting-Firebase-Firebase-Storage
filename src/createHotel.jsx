import { useState } from "react"
import {connect} from 'react-redux'
import {newHotel} from './store/actions'
import Navbar from './Navbar'
import Footer from "./footer"
import './style.css'




function CreateHotel(props){

const [hotelData,sethotelData]=useState({
    hotelName:"",
    hotelRating:"",
    hotelAddress:"",
    hotelContact:"",
    hotelRooms:"",
    roomPrice:"",
    hotelImage:"",
    hotelFacilities:[]


})

const handleChange=(e)=>{
if(e.target.checked){
   sethotelData({...hotelData,hotelFacilities:[...hotelData.hotelFacilities,e.target.value]})
}
else {
 var index= hotelData.hotelFacilities.indexOf(e.target.value)
 hotelData.hotelFacilities.splice(index,1)

}

}




return(
<>
    <Navbar/>

    <div className="container-fluid">
    <br /><br /><br />
    <div className="row">
       
         <div className="col-md-2"></div>
        <div className="col-md-5">
        <h3>Create Hotel</h3>
        <input className="inputHotel"  type="text"  placeholder="Hotel Name" onChange={(e)=>sethotelData({...hotelData,hotelName:e.target.value})}/>
        <input className="inputHotel" type="number"placeholder="Hotel Rating"onChange={(e)=>sethotelData({...hotelData,hotelRating:e.target.value})}/>
        <input className="inputHotel" type="text"  placeholder="Hotel Address"onChange={(e)=>sethotelData({...hotelData,hotelAddress:e.target.value})}/>
        <input className="inputHotel" type="number" placeholder="Contact Number"onChange={(e)=>sethotelData({...hotelData,hotelContact:e.target.value})}/>
        <input  className="inputHotel"type="number" placeholder="Total Rooms" onChange={(e)=>sethotelData({...hotelData,hotelRooms:parseInt(e.target.value)})}/>
        <input className="inputHotel" type="number" placeholder="(PKR)For 24 Hours"onChange={(e)=>sethotelData({...hotelData,roomPrice:e.target.value})}/> <br />
        <input  type="file" onChange={(e)=>e.target.files[0]?sethotelData({...hotelData,hotelImage:e.target.files[0]}):null} /> <br/>
        <input type="checkbox" value="Wifi"onChange={(e)=>handleChange(e)} /> Wifi
        <input type="checkbox" value="Hot-water"onChange={(e)=>handleChange(e)} /> Hot-Water
        <input type="checkbox" value="AC/TV"onChange={(e)=>handleChange(e)} /> AC/TV
        <input type="checkbox" value="Breakfast/Meals"onChange={(e)=>handleChange(e)} /> Breakfast/Meals
       
    
        <button onClick={()=>props.newHotel(hotelData)}>Send Data</button>
    
    </div>
    </div>
    <br /><br /><br />
    </div>
    <Footer/>

    </>
)
}


const mapStateToProps=(state)=>({
    hotel:state.hotel

})
const mapDispatchToProps=(dispatch)=>({
   newHotel:(hotelData)=>dispatch(newHotel(hotelData))
})


export default connect(mapStateToProps,mapDispatchToProps)(CreateHotel)