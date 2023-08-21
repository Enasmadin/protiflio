import React, { useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './skills.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
  return (
    <div className='skills-page'>
         <div   className='title'>
         <h1 className='mt-4'>  Skills   </h1>
    </div>
    <div  className='skill-content-page mt-4'>
        <p   className='description'>
        I have experience with them.    
        </p>
        <div className='detlais-personal' data-aos="fade-up" aos-duration="500">
            <div  className="row">
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> HTML </span>
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> ReactJS & Redux  & ReduxTolkit  </span>
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> CSS & SASS</span> 
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> React-bootstrap & MUI  </span>
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> bootstrap </span>
              </p>
            
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> Angular   </span>
              </p>
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span>  JS & Jquary </span>
              </p>
              
              <p className="col-6 ">
              <ArrowForwardIosIcon className='icon-detalis'/> 
              <span> Angular Material   </span>
              </p>
              
              
            </div>
          </div>


    </div>
    </div>
  )
}

export default Skills
