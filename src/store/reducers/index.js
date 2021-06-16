const INITAL_STATE = {
    loggedUser:null,
    email:"aunraza03222@gmail.com",
    hotel:[]
}

export default (state=INITAL_STATE,action)=>{
    switch (action.type) {
        case "SET_DATA":
            
            
           return(
            {
               ...state,name:action.name
             
           }
           )
      case "CreateHotel":

      return(
          {
         
             ...state,hotel:[...state.hotel,action.hotel]
             
              
          }
      )

  case 'GETDATA':
   
      return(
          {
              ...state,hotel:action.hotel
          }
      )

      case 'lOGGEDUSER':
   
        return(
            {
                ...state,loggedUser:action.data
            }
        )
   

        default:
            return state
    }
   
}