import React from 'react';
import "../style.css"
import image from '../../images/me.jpg';

export default function Greeting() {
  return (
    <div>
      <div className='greeting'>
        <img className="circle-image" src={image} alt='me' />
        <h1 className="greeting-one">Welcome to my portfolio!</h1>
        <h2> Every project is a chance for me to learn, grow, and build something better than before.</h2>
      </div>
    </div>
  );
}

