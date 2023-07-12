import React from 'react';
import "../style.css"
import image from '../../images/me.jpg';

export default function Greeting() {
  return (
    <div>
      <img className="circle-image" src={image} alt='me' />
      <div className='greeting'>
        <h1 className="greeting-one">Welcome to my portfolio!</h1>
        <h1> Crafting innovative web experiences with passion and precision.</h1>
      </div>
    </div>
  );
}

