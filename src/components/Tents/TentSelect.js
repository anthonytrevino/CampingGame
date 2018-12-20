import React, {Component} from 'react';
import './TentSelect.css';



// function handleOnClick(event) {
//   event.preventDefault();
//   console.log("img was clicked")
//
// }

export const UserTent = (props) => (
  <div>
    {props.tentNumber}
    {props.children}
  </div>
)


class TentSelect extends Component {
  // constructor(){
  //   super()
  // }



  render() {

    return(
      <div>
        <h1>Select your tent</h1>
        <div className="TentSelect">
          <div id="tent1">
            <img alt="alt" onClick={this.props.tentSelected1} src={require("../images/Tent1.jpg")} />
          </div>
          <div id="tent2">
            <img alt="alt" onClick={this.props.tentSelected2} src={require("../images/Tent2.jpg")} />
          </div>
          <div id="tent3">
            <img alt="alt" onClick={this.props.tentSelected3} src={require("../images/Tent3.jpg")} />
          </div>
          <div id="tent4">
            <img alt="alt" onClick={this.props.tentSelected4} src={require("../images/Tent4.jpg")} />
          </div>
          <div id="tent5">
            <img alt="alt" onClick={this.props.tentSelected5} src={require("../images/Tent5.jpg")} />
          </div>
          <div id="tent6">
            <img alt="alt" onClick={this.props.tentSelected6} src={require("../images/Tent6.jpg")} />
          </div>
        </div>
      </div>

    )


  }

}
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//
//     tentSelected1: () => dispatch({type:"tentSelected1", isTentSelected: true, tentNumber: 1, tentImg: {this.props.tentImg},
//     tentSelected2: () => dispatch({type:"tentSelected2", isTentSelected: true, tentNumber: 2}),
//     tentSelected3: () => dispatch({type:"tentSelected3", isTentSelected: true, tentNumber: 3}),
//     tentSelected4: () => dispatch({type:"tentSelected4", isTentSelected: true, tentNumber: 4}),
//     tentSelected5: () => dispatch({type:"tentSelected5", isTentSelected: true, tentNumber: 5}),
//     tentSelected6: () => dispatch({type:"tentSelected6", isTentSelected: true, tentNumber: 6}),
//
//   }
// }


export default TentSelect;
