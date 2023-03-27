import React from 'react';

export default function Contact() {
  return (
    <div className='form'>
      <h1>Contact Page</h1>
      <p>
        Feel free to contact me with the form below &#128522;
              </p>
              <form>
                <label>Name:<br></br>
                  <input type="text"/>
                </label>
                <br></br><label>Email Address:<br></br>
                  <input type="email" required/>
                </label>
                <p>Message:</p>
        <textarea name="message" id="message" cols="40" rows="8" placeholder="Enter your message here..."></textarea><br></br>
<br></br><input type="submit" id="submit"></input>
              </form>
    </div>
  );
}
