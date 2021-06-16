import {connect} from  'react-redux'
import {setData} from './store/actions'
import Navbar from './Navbar'
import Footer from './footer'

function AdminDashboard (props){

const createHotel=()=>{
  props.history.push('/CreateHotel')

}

  return(

    <>
    <Navbar/>
    <div className="container-fluid"  >
      <div className="row">

        <div className="col-m-12">

       
           <h1>Welcome To Admin Panel</h1>
      <button onClick={()=>createHotel()}>Create Hotel</button>
      </div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br />
    <Footer/>
    </div>
    </div>
   </>
  )
}


const mapStateToProps=(state)=>({


})

const mapDispatchToProps=(dispatch)=>({
setData:(data)=>dispatch(setData(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard)