import { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {showuserBooking} from './store/actions'
import Navbar from './Navbar'
import Footer  from './footer'
function ShowBookings(props){

const [data,setData]=useState({})
    

useEffect(()=>{
props.showuserBooking(props.loggedUser,(data)=>setData(data))
},[])

return(
    <>
    <Navbar/>
    
    <h2>{props?.loggedUser}</h2>
    <h4>Booking History</h4>
   <table border="1px solid">
       <thead>
           <tr>
               <th>Hotel of Stay</th>
               <th>Booked Rooms</th>
               <th>Number of People</th>
               <th>Stay (Days)</th>
               <th>Amount Payed</th>
           </tr>

         
           {data?data.selectedHotel?.map((v,i)=>{
               return(
            <tr>
                <td>{v}</td>
                <td>{data.selectedRooms[i]}</td>
                <td>{data.people[i]}</td>
                <td>{data.stay[i]}</td>
                <td>{data.amountPayed[i]}</td>
            </tr>
               )
           }):null}
          
       </thead>
   </table>
   <br /><br /><br /> <br /> <br />
   <Footer/>
    </>
)
}



const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser

})
const mapDispatchToProps=(dispatch)=>({
    showuserBooking:(user,set)=>dispatch(showuserBooking(user,set))

})
export default connect(mapStateToProps,mapDispatchToProps)(ShowBookings)

