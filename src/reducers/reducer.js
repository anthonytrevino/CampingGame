const initialState = {
  tentSelected : false ,
  tentNumber : ' ',
  userTentImg : ' ',
  inEvent: false,
  inBearEvent: false,
  inCatEvent: false,
  inSnakeEvent: false,
  eventOver: false,
}

const reducer = (state= initialState, action) => {
    if(action.type =="tentSelected1") {
      return {
        ...state,
        tentSelected : true,
        tentNumber: 1,
        userTentImg : "Tent1.jpg"

      }
    } else if(action.type =="tentSelected2")
      {
      return {
        ...state,
        tentSelected : true,
        tentNumber: 2,
        userTentImg : "./components/images/Tent2.jpg"
      }
    }else if(action.type =="tentSelected3")
      {
      return{
        ...state,
        tentSelected : true,
        tentNumber: 3,
        userTentImg : "./components/images/Tent3.jpg"
      }
    }
    else if(action.type =="tentSelected4")
      {
      return{
        ...state,
        tentSelected : true,
        tentNumber: 4,
        userTentImg : "./components/images/Tent4.jpg"
      }
    }
    else if(action.type =="tentSelected5")
      {
      return{
        ...state,
        tentSelected : true,
        tentNumber: 5,
        userTentImg : "./components/images/Tent5.jpg"
      }
    }
    else if(action.type =="tentSelected6")
      {
      return{
        ...state,
        tentSelected : true,
        tentNumber: 6,
        userTentImg : "./components/images/Tent6.jpg"
      }
    }
    else if(action.type =="inEvent")
      {
      return{
        ...state,
        inEvent : true

      }
    }
    else if(action.type =="bearSelected")
      {
      return{
        ...state,
        inBearEvent : true

      }
    }
    return state
}

export default reducer
