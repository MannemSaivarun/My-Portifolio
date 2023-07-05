import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'> 
          <a href='https://www.linkedin.com/in/mannem-sai-varun/' target='_blank'><LinkedInIcon /></a>
          <a href='https://github.com/MannemSaivarun' target='_blank'><GitHubIcon /></a>
            <InstagramIcon />
            <TwitterIcon />
        </div>
        <p> &copy; 2023 MyPortifolio.com </p>
    </div>
  )
}

export default Footer