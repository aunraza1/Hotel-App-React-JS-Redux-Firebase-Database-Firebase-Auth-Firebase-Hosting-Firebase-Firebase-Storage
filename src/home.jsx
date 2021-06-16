import { useEffect, useState } from "react"
import {connect} from 'react-redux'
import {getData} from './store/actions'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from "./footer"

function Home (props){


 const [hotelNames,setHotelNames]=useState([]) 
 const [hotelAddress,sethotelAddress]=useState([])
 const [hotelContact,sethotelContact]=useState([])
 const [hotelRatings,sethotelRatings]=useState([])
 const [hotelPrice,setPrice]=useState([])
 const [url,setURL]=useState([])
 const [hotelFacilities,setFacilities]=useState([])
 const [hotelRooms,setHotelRooms]=useState([])
 const [key,setKey]=useState([])
 const [showComponent,setShowComponent]=useState(false)
 
   

 useEffect(()=>{
   props.getData();
    getReduxData()


  
 },[props])   



 const getReduxData =()=>{

    var names=[]
    var contact=[]
    var address=[]
    var url=[]
    var Ratings=[]
    var price=[]
    var rooms=[]
    var facilities=[]
    var key=[]
     props.hotel.forEach((element)=>
     {
         names.push(element.hotelName)
         contact.push(element.hotelContact)
         address.push(element.hotelAddress)
         url.push(element.url)
         Ratings.push(element.hotelRating)
         price.push(element.roomPrice)
         facilities.push(element.hotelFacilities)
         rooms.push(element.hotelRooms)
         key.push(element.key)


     
     })
     setHotelNames(names)
     sethotelContact(contact)
     setFacilities(facilities)
     sethotelAddress(address)
     sethotelRatings(Ratings)
     setPrice(price)
     setURL(url)
     setHotelRooms(rooms)
     setKey(key)
 }



return(
   
        
<>
<Navbar/>
<div className='container-fluid'>

    <div className="row">
        <h1>Home</h1>
    </div>
<div className="row"> 
       
       {props.hotel.map((v,i)=>{
        return(
            <div className ="col-md-3">
            <div  style={{display:"inline-block"}} className="card" style={{width: '12rem' ,height:300}}>
            <img className="card-img-top" height={150}  src={url[i]} alt="Card image cap" />
            <div className="card-body" style={{display:"inline-block"}}>
             <h4 className="card-text">{hotelNames[i] }</h4>
             <Link to={{pathname:'/hotelDetails',
         details:{
            hotelName:hotelNames[i],
            hotelContact:hotelContact[i],
            hotelRatings:hotelRatings[i],
            hotelAddress:hotelAddress[i],
            hotelPrice:hotelPrice[i],
            hotelFacilities:hotelFacilities[i],
            hotelRooms:hotelRooms[i],
            url:url[i],
            key:key[i]
            

         }
        }}> <h5 className="card-text">{hotelPrice[i] + '/-PKR 24 Hours Stay!'}</h5></Link> 
            </div>
          </div>
         
          </div>
       
        )
       })}
             

        
         
    
   
    
   
    </div>
   

</div>
<Footer/>
   </>
    
)

}
const mapStateToProps=(state)=>({
    hotel:state.hotel,
    loggedUser:state.loggedUser
   


})
const mapDispatchToProps=(dispatch)=>({

    getData:()=>dispatch(getData())
    
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)