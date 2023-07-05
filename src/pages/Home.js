import React from 'react';
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>

      <div className="about">
        
        <h2>Hi, My Name is Mannem Saivarun</h2>
        <div className="prompt">
          <p>A Software Developer with a passion for learning and creating.</p>
          <a href='https://www.linkedin.com/in/mannem-sai-varun/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/MannemSaivarun' target='_blank'><GitHubIcon /></a>
          <a href='mailto:mannemsaivarun992@gmail.com' target='_blank'><EmailIcon /></a>
          
        </div>
      </div>
      
      <div className="skills">
        <h1>Skills</h1>
        <ol className='list'>
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, MaterialUI, Javascript </span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS,MYSQL,MongoDB </span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>Javascript, Python, C++ </span>
          </li>
        </ol>
      </div>

    </div>
  )
}

export default Home

