import { useState } from "react"
import { useEffect } from "react"
import Star from './Images/star.jpg'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {bookings} from './store/actions'
import Navbar from "./Navbar"
import Footer from "./footer"


function HotelDetails(props){

 const [viewHotel,setHotel]=useState()
 const [show, setShow] = useState(false);
 const [modelTitle,setmodelTitle]=useState("Personal Details")
 const [btnName,setBtnName]=useState("Proceed to Payment")
 const [showPayment,setShowPayment]=useState("false")
 const [showDetails,setShowDetails]=useState("true")
 const [personalDetails,setDetails]=useState({
   name:"",
   cnic:"",
   address:"",
   phone:"",
   numberofPersons:"",
   days:"",
   selectedRooms:"",
   hotelRooms:"",
  

 })
 const [payment,setPaymentDetails]=useState({
  
   selectedHotel:"",
   bankName:"",
   creditCard:"",
   cardCode:"",
   expiry:"",
   paymentAmount:""


 })
 



  useEffect(()=>{
    setHotel(props.location.details)

    

  })
  const handleClose = () => setShow(false);
  const handleShow = () => {
 if (props.loggedUser==null){
   alert("Sign In to continue!")
   setShow(false)
 }
 else{
  setShow(true);
  }
  }

  const sendData=()=>{
   
    setShowDetails("false")
   setShowPayment("true")
   setmodelTitle("Payment Details")
   setBtnName("Confirm Booking")
   var paymentAmount= personalDetails.selectedRooms*personalDetails.days*props.location.details.hotelPrice;
  setPaymentDetails({...payment,paymentAmount:paymentAmount,selectedHotel:viewHotel?.hotelName})
  setDetails({...personalDetails,hotelRooms:viewHotel?.hotelRooms})
  
  
  }

  const paymentData=()=>{
   
 var combine= Object.assign(personalDetails,payment);

 if(combine.name!==""&& combine.selectedRooms!==""&&combine.cnic.length!=="" &&combine.address!==""&&combine.numberofPersons!==""&& combine.days!==""&&combine.hotelRooms!==""&& combine.selectedHotel!==""&&combine.bankName!==""&&combine.creditCard!==""&&combine.cardCode!=="" &&combine.expiry!==""&&combine.paymentAmount!=="" ){
   props.bookings(combine,viewHotel?.key)
 }
else{
  alert("Cannot Send Data")
}

  

  }

    return(
 <>
      <Navbar/>
  <div className="container-fluid">
   <div className="row">

     
       <div className="col-md-4">
         <h2>Hotel Details</h2>
       <img src={viewHotel?.url}  width="250" height="300" />
       
     
<hr />

       </div>
       <div className="col-md-8 mt-5" >
         <div className="row">
           <div className="col-md-2"></div>
           <div className="col-md-5">
             <div>
               <h4>Hotel Name</h4>
               </div>
               <div>
                 <p>{viewHotel?.hotelName}</p>
               </div>
               <div>
                 <h4>Hotel Contact</h4>
               </div>
               <div>
               <p>{viewHotel?.hotelContact}</p>
               </div>
               <div>
                 <h4>Hotel Address</h4>
               </div>
               <div>
               <p>{viewHotel?.hotelAddress}</p>
               </div>
               <div>
                 <h4>Ratings </h4>
               </div>
               <div>
               <p>{viewHotel?.hotelRatings}
               <img src={Star} height="50" alt="" />
               </p>
               </div>
               </div>

               <div className="col-md-5">

              
               <div>
                 <h4>Available Rooms </h4>
               </div>
               <div>
               <p>{viewHotel?.hotelRooms}</p>
               </div>
               <div>
               <h4>Charges</h4>
               </div>
               <div>
                 <p>{viewHotel?.hotelPrice}/-PKR for 24 hours</p>
               </div>
               <div>
                 <h4>Facilities</h4>
               </div>
               <div>
               {viewHotel?.hotelFacilities.map((v,i)=>{
                    return(
                    <ul>
                      <li >{v}</li>
                    </ul>
                    )
               })}
               </div>
             
             
           </div>
         </div>
       </div>
     </div>
    
     <Button variant="primary" onClick={handleShow}>
        Book Room
      </Button>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modelTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {showDetails=="true"? <div>
           <div>
                    <input type="text" placeholder="Name" id="name" onChange={(e)=>setDetails({...personalDetails,name:e.target.value})} /> 
                    </div>
                    <div>
                    <input type="number" placeholder="CNIC" id="cnic" onChange={(e)=>setDetails({...personalDetails,cnic: parseInt(e.target.value)})} /> 
                    </div>
                    <div>
                    <input type="text" placeholder="Address" id="add" onChange={(e)=>setDetails({...personalDetails,address:e.target.value})} /> 
                    </div>
                    <div>
                    <input type="number" placeholder="Contact Number" id="phone" onChange={(e)=>setDetails({...personalDetails,phone:e.target.value})} /> 
                    </div>
                    <div>
                    <input type="text" placeholder="Number of Persons" id="persons" onChange={(e)=>setDetails({...personalDetails,numberofPersons:e.target.value})} /> 
                    </div>
                    <div>
                    <input type="text" placeholder="Number of days to stay" id="days" onChange={(e)=>setDetails({...personalDetails,days: parseInt(e.target.value)})} /> 
                    </div>
                    <div>
                    <input type="text" placeholder="Number of Rooms" id="rooms" onChange={(e)=>setDetails({...personalDetails,selectedRooms: parseInt(e.target.value)})} /> 
                    </div>


           </div>:null}
                   

                    {showPayment=="true"?
                    <div>

                      <div>
                        <h6>Amount Payable</h6>
                        <p><b>{payment.paymentAmount}/-PKR</b></p>
                      </div>
                      <div>
                        <p>Select Bank:</p>
                    <select name="Contact Subject" id="Bank" onChange={(e)=>setPaymentDetails({...payment,bankName:e.target.value})}>
                        <option value="Select Bank">Select Bank</option>
                        <option value="Meezan Bank">Meezan Bank</option>
                        <option value="Bank Al Habib">Bank Al Habib</option>
                        <option value="HBL">Bank Islami</option>
                        <option value="HBL">Allied Bank</option>
                      </select>
                     </div>
                     <div>
                       <p>Enter Card Numbe:r</p>
                     <input type="number" placeholder="Enter Credit Card Num"onChange={(e)=>setPaymentDetails({...payment,  creditCard: parseInt( e.target.value)})} />
                     </div>
                     <div>
                       <p>Enter Card Code:</p>
                     <input type="password" placeholder="Enter Credit Card Code" onChange={(e)=>setPaymentDetails({...payment,cardCode:parseInt( e.target.value)})} />
                     </div>
                     <div>
                      <p>Expiry Date:</p>
                     <input type="date" onChange={(e)=>setPaymentDetails({...payment,expiry:e.target.value})} />
                     </div>
                    </div>

                    :null}
              
                
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> btnName =="Proceed to Payment"?sendData():paymentData()}>
          {btnName}
          </Button>
        </Modal.Footer>
      </Modal>


      


     


      
  
</div>
<br /><br /><br />
<Footer/>
</>

    )
}


const mapDispatchToProps=(dispatch)=>({
  bookings:(booking,selectedKey)=>dispatch(bookings(booking,selectedKey))
})

const mapStateToProps=(state)=>({
  loggedUser:state.loggedUser

})





export default connect(mapStateToProps,mapDispatchToProps)(HotelDetails)