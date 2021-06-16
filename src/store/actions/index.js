import firebase from '../../config/firebase'
import {storage} from '../../config/firebase'


const setData =(data)=>{

    return(dispatch)=>{
       
        dispatch({type:"SET_DATA",name:data})

    }
    
}

const newHotel=(data)=>{    


 
const uploadImage=storage.ref('Images/'+data.hotelImage.name).put(data.hotelImage)
uploadImage.on("state_changed", snapshot=>{},error=>{
    alert(error)
},()=>

storage.ref("Images").child(data.hotelImage.name).getDownloadURL().then(url=>{

    let key =firebase.database().ref('Hotels').push().key


 if(data.hotelName!=="" && data.hotelContact!=="" &&data.hotelRating!=="" && data.url!=="" &&data.hotelAddress!=="" &&data.hotelFacilities!==""&&data.roomPrice!==""){      
firebase.database().ref('Hotels/'+key).set(data,(err)=>{
if(err){
    console.log("Error Occured!")
}
else{
    alert("Success! Hotel Added")
    window.location.reload()
}
})
 }
 else{
     alert("All Fields are Required!")
 }

let newData={
    key:key,
    url:url
    

}

var query=firebase.database().ref('Hotels').orderByKey().equalTo(key)
query.on("child_added",(snapshot)=>{
    snapshot.ref.update(newData)
})
})
)



return(dispatch)=>{
    dispatch({type:"CreateHotel",hotel:data})

    }

}

const getData=()=>{
return (dispatch)=>{
    var hotelData=[];
firebase.database().ref('Hotels/').once('value',(snapshot)=>{
    snapshot.forEach((child)=>{
        hotelData.push(child.val())
    })
   
    dispatch({type:"GETDATA",hotel:hotelData})
})
  
}
}

const bookings=(booking,selectedKey)=>{
     return(dispatch)=>{
     
         var key = firebase.database().ref('Bookings/').push().key
         firebase.database().ref('Bookings/'+key).set(booking,(err)=>{
             if(err){
                 alert("Something Went Wrong!")
             }
             else{
                 alert("Booking Added Successfully!")
                 window.location.pathname="/"
                 
                 
            
                 
             }
         })
let newData ={
    hotelRooms:booking.hotelRooms-booking.selectedRooms

}
       var query=  firebase.database().ref('Hotels').orderByKey().equalTo(selectedKey)
       query.on("child_added",(snapshot)=>{
           snapshot.ref.update(newData)
       })
     }

}


let facebookLogin =(loggedUser)=>{

    return(dispatch)=>{

        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
          var credential = result.credential;
          var user = result.user;
         
          loggedUser(user.displayName)
         
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error Message",errorMessage)
      
        });
      
       
    }
     

}

let googleLogin =(loggedUser)=>{
    return(dispatch)=>{
    
    var provider = new firebase.auth.GoogleAuthProvider
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      loggedUser(user.displayName)
      
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  
    }
}

const sendloggedUser=(loggedUser)=>{

    return(dispatch)=>{
       
        dispatch({type:"lOGGEDUSER",data:loggedUser})
    }
  

}


const showuserBooking=(user,set)=>{
    return(dispatch)=>{
        

        
        var selectedHotel=[];
        var selectedRooms=[];
        var amountPayed=[];
        var people=[];
        var stay=[];

        var query= firebase.database().ref('Bookings').orderByChild('name').equalTo(user)
        query.once('value',(snapshot)=>{
            snapshot.forEach((child)=>{
          
          selectedHotel.push(child.val().selectedHotel)
          selectedRooms.push(child.val().selectedRooms)
          amountPayed.push(child.val().paymentAmount)
          people.push(child.val().numberofPersons)
          stay.push(child.val().days)  
            


            })
           
          

           set({
             
               selectedHotel:selectedHotel,
               selectedRooms:selectedRooms,
               amountPayed:amountPayed,
               people:people,
               stay:stay
           })
            
        })
    }

}
const addAdmin=(email,pass)=>{

    return(dispatch)=>{





        var emails=[];
        var Passwords=[];
             firebase.database().ref('AdminCredentials').once('value',(snapshot)=>{
                 snapshot.forEach((child)=>{
                     emails.push(child.val().email)
                     Passwords.push(child.val().pass)
                  
                 })
             var flag = false;
               emails.map((v,i)=>{
               if (email==emails[i] ){
                 flag=true;
                 alert("Oopz ! Try with someother Email,email already exist")
                
               
             }
         })
             if(flag==false){
                var key = firebase.database().ref('AdminCredentials').push().key
                let obj ={
                    key:key,
                    email:email,
                    pass:pass
                }
                firebase.database().ref('AdminCredentials/'+key).set(obj,(err)=>{
                    if(err){
                        alert("Something Went Wrong!")
                    }
                    else{
                        alert("You are Registered as Admin!")
                        window.location.pathname='/AdminLogin'
                    }
                })
             }
                })


      
    }

}

const verifyAdmin=(e,p)=>{

    return (dispatch)=>{
   var email=[];
   var Passwords=[];
        firebase.database().ref('AdminCredentials').once('value',(snapshot)=>{
            snapshot.forEach((child)=>{
                email.push(child.val().email)
                Passwords.push(child.val().pass)
             
            })
        var flag = false;
          email.map((v,i)=>{
          if (e==email[i]&& p==Passwords[i] ){
            flag=true;
            alert("Login Successfull! you are loged in as Admin")
            window.location.pathname='Dashboard'
          
        }
    })
        if(flag==false){
            alert("Email/Password is Wrong!")
        }
           })
    }
}
export {
    setData,
    newHotel,
    getData,
    bookings,
    facebookLogin,
    googleLogin,
    sendloggedUser,
    showuserBooking,
    addAdmin,
    verifyAdmin
   

}
