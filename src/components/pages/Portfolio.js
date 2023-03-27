import React from 'react';
import "../style.css";
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='pics'>
        <a href="https://brenda255.github.io/weather-dashboard/"><img alt="weather" src="../images/weather.jpg"></img>  </a><br></br>
        <a href="https://sifrult.github.io/streaming_locator/"><img alt="streaming" src="../images/streaming.jpg"></img>  </a><br></br>
        <a href="https://salty-oasis-46016.herokuapp.com/"><img alt="gourmet" src="../images/gourmet.jpg"></img>  </a><br></br>
        <a href="https://brenda255.github.io/day-scheduler/"><img alt="scheduler" src="../images/scheduler.jpg"></img>  </a><br></br>
        <a href="https://brenda255.github.io/coding-quiz/"><img alt="quiz" src="../images/quiz.jpg"></img>  </a><br></br>
        <a href="https://brenda255.github.io/password-generator/"><img alt="passwrd" src="../images/passwrd.jpg"></img>  </a><br></br>


      </div>

    </div>
  )
};

