import {BrowserRouter as Router, Route} from "react-router-dom";
import AdminDashboard from '../AdminDashboard'
import CreateHotel from '../createHotel'
import Home from '../home'
import HotelDetails from "../hotelDetail"
import ShowBookings  from "../showBookings";
import AdminSignUp from "../adminSignup";
import AdminSignIn from "../adminSignin";



 
function appRouuter(){

    return(
        <Router>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Dashboard' component={AdminDashboard} ></Route>
            <Route exact path='/CreateHotel' component={CreateHotel} ></Route>
            <Route exact path='/hotelDetails' component={HotelDetails}></Route>
            <Route exact path='/ShowBookings' component={ShowBookings}></Route>
            <Route exact path='/Admin' component={AdminSignUp}></Route>
            <Route exact path='/AdminLogin' component={AdminSignIn}></Route>
        
            
        </Router>
    )

}
export default appRouuter