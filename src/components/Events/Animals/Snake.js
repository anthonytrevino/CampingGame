import React from 'react';

const answerHandler = (e) => {
  console.log(e.target.id)
  let result  ;
  switch(e.target.id) {
    case "Feed":
    result = "The Snake is thankful for your offering";
    break;
    case "Scream" :
    result = "You are a cowardly excuse for a Human bean.";
    break;
    case "Stand" :
    result = "A brave choice. I'll tell you one thing: You've got guts. The Snake raises it's head, bares its fangs and hisses at you. Ever seen a snake hiss before? No amount of google-searching could've prepared you for the terror you feel now. ";
    break;
    case "Challenge" :
    result = "Only the most brave or most foolish would do what you just did. The good thing is now's not the time to take an IQ test, It's time to test your might! Fight!";
    break;
    default:
     // do nothing
  }console.log(result)
}


const SnakeSpawn =() => {


  return(
    <div>
      <div>
        <h1 className="EventTitle">A snake slithers up to you</h1>
        <img alt="alt" src={require("./animalpictures/snake default.jpeg")} />
        <h3>"What will you do?"</h3>
            <ul className="ActionList">
              <li id="Feed" onClick={answerHandler} className="ActionItems">Feed it</li>
              <li id="Scream" onClick={answerHandler} className="ActionItems">Scream in terror</li>
              <li id="Stand" onClick={answerHandler} className="ActionItems">Stand tall with your arms in the air</li>
              <li id="Challenge" onClick={answerHandler} className="ActionItems">Challenge it to a wrestling match</li>
            </ul>

      </div>
    </div>

  )
}

export default SnakeSpawn;
