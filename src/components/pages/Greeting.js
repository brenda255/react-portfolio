import React from 'react';
import "../style.css"
import image from '../../images/me.jpg';

export default function Greeting() {
  return (
    <div>
      <div className='greeting'>
        <img className="circle-image" src={image} alt='me' />
        <h1 className="greeting-one">Welcome to my portfolio!</h1>
        <h2> Crafting innovative web experiences with passion and precision.</h2>
      </div>
    </div>
  );
}

