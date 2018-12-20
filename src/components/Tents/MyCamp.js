import React, {Component} from 'react';
import TentSelect,{UserTent} from './TentSelect';
import RandomEvent from '../Events/Event.js';
import reducer from '../../reducers/reducer';
// import EventSelector from 'EventSelector';

class MyCamp extends Component{

// function ShowEvents(props) {
//   const notInEvent = props.notInEvent;
//   if(notInEvent) {
//     return <RandomEvent />;
//   }
//   return <div> notInEvent was true </div>
// }

  render(){
    console.log(this.props)
    // if(this.props.tentSelected === true) {
    //
    // }
    return (
      <div>
        <h1>My Camp</h1>

        <UserTent {...this.props}>

          <img src={require(`../images/Tent${this.props.tentNumber}.jpg`)} />
        </UserTent>


            <div>
              <RandomEvent {...this.props}/>
            </div>


         }



      </div>
    )
  }
}


export default MyCamp;
