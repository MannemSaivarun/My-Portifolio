import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

      <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2016-2017'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon = {<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>New Vision High School</h3>
            <p>SSC</p>
          </VerticalTimelineElement>

      <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017-2019'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon = {<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>New Vision College,Khammam,Telangana</h3>
            <h4  className="vertical-timeline-element-subtitle">Intermediate</h4>
            <p>MPC</p>
          </VerticalTimelineElement>

      

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2019-2023'
          iconStyle={{background:"#3e497a",color:"#fff"}}
          icon = {<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>National Institute of Technology Andhra Pradesh,Tadepalligudem</h3>
            <h4  className="vertical-timeline-element-subtitle">Bachelor's Degree</h4>
            <p>EEE</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience