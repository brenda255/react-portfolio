import React from 'react';
import "../style.css";
import streaming from '../../images/streaming.png';
import gourmet from '../../images/gourmet.png';
import ollisander from '../../images/ollisander.png';
import weather from '../../images/weather.png';

export default function Portfolio() {
  return (
    <div className='portfolio'> 
      <h1>My Portfolio</h1>
      <div className='pics'>
        <a  href="https://sifrult.github.io/streaming_locator/"><img alt="streaming" className="portfolio-img" src={streaming}></img>  </a><br></br>
        <a  href="https://salty-oasis-46016.herokuapp.com/"><img alt="gourmet" className="portfolio-img" src={gourmet}></img>  </a><br></br>
        <a  href="https://wizard-wands-production.up.railway.app/"><img alt="ollisander" className="portfolio-img" src={ollisander}></img>  </a><br></br>
        <a  href="https://brenda255.github.io/weather-dashboard/"><img alt="weather" className="portfolio-img" src={weather}></img>  </a><br></br>
      </div>
      </div>
  )
};

