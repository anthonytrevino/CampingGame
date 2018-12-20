import React, {Component} from 'react';
import './Event.css';
import BearSpawn from './Animals/Bear';
import CatSpawn from './Animals/Cat';
import SnakeSpawn from './Animals/Snake'

class RandomEvent extends Component {

// randomEventsArray = [{BearSpawn},{CatSpawn},{SnakeSpawn}]

// function triggerEvent(event) {
//   event.preventDefault();
//
// }

  render() {
    return (
      <div>
        <div className = "RandomEvent">

          <div>
            <h3>Bear</h3>
            <BearSpawn />
          </div>


          <div>
            <h3>Cat</h3>
            <CatSpawn />
          </div>


          <div>
            <h3>Snake</h3>
            <SnakeSpawn />
          </div>


        </div>

      </div>
    )
  }
}

export default RandomEvent;
