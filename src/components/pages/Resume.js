import React from 'react';
import "../style.css"
import pdf from '../../resume/Resume.pdf';

export default function Resume() {
  return (
    <div className='resume'>
     <h1>
        Download my <a href= {pdf} target="_blank" rel="noopener noreferrer" >Resume</a>
</h1>
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
  <li><img src='https://skillicons.dev/icons?i=vscode' title='vscode' alt='vscode'/></li>

</ul>

    </div>
    </div>
  );
}
