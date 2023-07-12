import React from 'react';
import "../style.css"

export default function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
      <p>
        Download my <a href="https://docs.google.com/document/d/1uuReNEPYVU-HyOk8_85ByvHY04RgJ0qHXTcmk_wJPw4/edit?usp=sharing">Resume</a>
</p>
{/* <h2>Front-end Proficiencies</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>jQuery</li>
  <li>Responsive Design</li>
  <li>React</li>
  <li>Bootstrap</li>
</ul>
<h2>Back-end Proficiencies</h2>
<ul>
  <li>API's</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>MySQL</li>
  <li>MongoDB, Mongoose</li>
  <li>Rest</li>
  <li>GraphQL</li>
</ul> */}

<h1>Languages, Skills, and Libraries</h1>
<div className='skills-container'>
<ul>
  <li><img src='https://skillicons.dev/icons?i=html' title='html' alt='html'/></li>
  <li><img src='https://skillicons.dev/icons?i=css' title='css' alt='css'/></li>
  <li><img src='https://skillicons.dev/icons?i=js' title='js' alt='js'/></li>
  <li><img src='https://skillicons.dev/icons?i=react' title='react' alt='react'/></li>
  <li><img src='https://skillicons.dev/icons?i=jquery' title='jquery' alt='jquery'/></li>
  <li><img src='https://skillicons.dev/icons?i=nodejs' title='nodejs' alt='nodejs'/></li>
  <li><img src='https://skillicons.dev/icons?i=mongodb' title='mongodb' alt='mongodb'/></li>
  <li><img src='https://skillicons.dev/icons?i=mysql' title='mysql' alt='mysql'/></li>
  <li><img src='https://skillicons.dev/icons?i=github' title='github' alt='github'/></li>
</ul>

    </div>
    </div>
  );
}
