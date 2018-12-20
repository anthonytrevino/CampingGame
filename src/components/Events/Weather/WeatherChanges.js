// import React from 'react'
//
// const RainChange =() => {
//
// }
//
// const HeatChange =() => {
//
// }

Page to store extra code

// path from MyCamp.js to image
<img src={require("./tents/Tent1.jpg")} />



// path from reducer to img
../components/Tents/tents/Tent1.jpg


<div>
  <h1>Select your tent</h1>
  <div className="TentSelect">
    <div id="tent1">
      <img onClick={this.props.tentSelected1} src={require("./tents/Tent1.jpg")} />
    </div>
    <div id="tent2">
      <img onClick={this.props.tentSelected2} src={require("./tents/Tent2.jpg")} />
    </div>
    <div id="tent3">
      <img onClick={this.props.tentSelected3} src={require("./tents/Tent3.jpg")} />
    </div>
    <div id="tent4">
      <img onClick={this.props.tentSelected4} src={require("./tents/Tent4.jpg")} />
    </div>
    <div id="tent5">
      <img onClick={this.props.tentSelected5} src={require("./tents/Tent5.jpg")} />
    </div>
    <div id="tent6">
      <img onClick={this.props.tentSelected6} src={require("./tents/Tent6.jpg")} />
    </div>
  </div>
</div>
