import React, { useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Aos from 'aos';
import "aos/dist/aos.css";

import "./About.css";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div   className='container'>

   
    <div  className="about-page ">
      
      <div   className='title'>
      <h1 className='mt-4'>  About  </h1>
      </div>
      <div   className='content-about mt-4'>
        <p> I am a passionate front-end developer with expertise in HTML, CSS, and JavaScript. With  ayear of experience in creating responsive and user-friendly web applications, I am skilled in utilizing modern front-end frameworks and libraries such as ReactJS and angular . </p>
        <div   className='detalis' data-aos="fade-left" aos-duration="500">
          <h1>Front End Developer </h1>
          <p>
          I graduated from the Faculty of Engineering, Telecommunications Department, Al-Azhar University in 2021. <br/>
          I graduated from the ITI, Track: Full Stack PHP Angular, in 2022 . <br/>
          I worked for four months as a Front-End Developer with Angular at Soft-Zone company .
          </p>
          <div className='detlais-personal'>
            <div  className="row">
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> Birthday : </span>
                 14  Apr 1998
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> Age : </span> 
                   25 
               
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> Phone: </span>
                  01097499806
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> City: </span>
                 Al-Mansoura
              </p>
              
              
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  )
}

export default About
