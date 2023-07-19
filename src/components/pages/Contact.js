import React from 'react';
import "../style.css"

export default function Contact() {
  return (
    <div className='contact'>
      <div className='form'>
        <h1>Contact Me!</h1>
        <p>
          Feel free to contact me with the form below &#128522;
        </p>
        <form className='contact-form'>
          <label className='form-label'>Name:<br />
            <input type="text" className='form-input' />
          </label>
          <br />
          <label className='form-label'>Email Address:<br />
            <input type="email" className='form-input' required />
          </label>
          <p>Message:</p>
          <textarea
            name="message"
            id="message"
            cols="40"
            rows="8"
            placeholder="Enter your message here..."></textarea><br></br>
          <br />
          <input type="submit" id="submit" className='form-submit' value="SEND &#128231;"></input>
        </form>
        <br />
        <p>You can also find me here:</p>
        <ul>
          <li>
            <a href='https://github.com/brenda255' rel="noreferrer" target="_blank">
              <img src='https://skillicons.dev/icons?i=github' alt='github'></img>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/brenda-s-b8769326a/' rel="noreferrer" target="_blank">
              <img src='https://skillicons.dev/icons?i=linkedin' alt='linkedin'></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
