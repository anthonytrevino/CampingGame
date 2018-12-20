import React, { Component } from 'react';

import './App.css';
import TentSelect from './components/Tents/TentSelect.js';
// import {createStore} from "redux";
// import reducer from "./reducers/reducer";
// import BearSpawn from "./components/Events/Animals/Bear";
// import CatSpawn from "./components/Events/Animals/Cat";
// import SnakeSpawn from "./components/Events/Animals/Snake";
// import RandomEvent from './components/Events/Event';
import MyCamp from './components/Tents/MyCamp';
import {connect} from 'react-redux';
import './components/images/Tent1.jpg';
import Checkout from './Checkout';


class App extends Component {




  render() {
    // console.log(this.props)
    return (

      <div className="App">



        { this.props.isTentSelected === false ?
          <div>
          <TentSelect {...this.props} />
          </div>
         : <div>
              <MyCamp {...this.props} />
            </div>
        }


          <div >
            <Checkout
            name={'The Road to learn React'}
            description = {'Only the Book'}
            amount={1} />
          </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isTentSelected: state.tentSelected,
    tentNumber : state.tentNumber,
    userTentImg : state.userTentImg,
    inEvent: state.userInEvent,
    inBearEvent: state.inBearEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    tentSelected1: () => dispatch({type:"tentSelected1", isTentSelected: true, tentNumber: 1, userTentImg :"./components/images/Tent1.jpg"}),
    tentSelected2: () => dispatch({type:"tentSelected2", isTentSelected: true, tentNumber: 2}),
    tentSelected3: () => dispatch({type:"tentSelected3", isTentSelected: true, tentNumber: 3}),
    tentSelected4: () => dispatch({type:"tentSelected4", isTentSelected: true, tentNumber: 4}),
    tentSelected5: () => dispatch({type:"tentSelected5", isTentSelected: true, tentNumber: 5}),
    tentSelected6: () => dispatch({type:"tentSelected6", isTentSelected: true, tentNumber: 6}),
    inEvent: () => dispatch({type:"inEvent", userInEvent: true}),
    eventOver: () => dispatch({type:"eventOver", eventOver: true}),
    bearSelected: () => dispatch({type:"bearSelected", inBearEvent:true})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
