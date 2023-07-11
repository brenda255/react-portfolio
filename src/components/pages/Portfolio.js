import React from 'react';
import "../style.css";

import streaming from '../../images/streaming.png';
import gourmet from '../../images/gourmet.png';
import ollisander from '../../images/ollisander.png';
import weather from '../../images/weather.png';
// import quiz from '../../images/quiz.jpg';
// import password from '../../images/passwrd.jpg';

export default function Portfolio() {
  return (
    <div className='portfolio'> 
      <h1>Portfolio</h1>
      <div className='pics'>
        <a href="https://sifrult.github.io/streaming_locator/"><img alt="streaming" src={streaming}></img>  </a><br></br>
        <a href="https://salty-oasis-46016.herokuapp.com/"><img alt="gourmet" src={gourmet}></img>  </a><br></br>
        <a href="https://wizard-wands-production.up.railway.app/"><img alt="ollisander" src={ollisander}></img>  </a><br></br>
        <a href="https://brenda255.github.io/weather-dashboard/"><img alt="weather" src={weather}></img>  </a><br></br>
        {/* <a href="https://brenda255.github.io/coding-quiz/"><img alt="quiz" src={quiz}></img>  </a><br></br><br></br>
        <a href="https://brenda255.github.io/password-generator/"><img alt="password" src={password}></img>  </a><br></br> */}

      </div>
      
      
      
    </div>
  )
};

