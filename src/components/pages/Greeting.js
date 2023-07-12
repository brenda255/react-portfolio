import React from 'react';
import "../style.css"
import image from '../../images/me.jpg';

export default function Greeting() {
  return (
    <div>
    <img className="circle-image"  src={image} alt='me'/>
    <div className='greeting'>
            <h1>Welcome to my portfolio! Crafting innovative web experiences with passion and precision.</h1>
    </div>
    </div>
  );
}

