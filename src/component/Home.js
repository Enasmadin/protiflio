import React, { useEffect, useState } from 'react';
import './home.css';
import DownloadIcon from '@mui/icons-material/Download';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contect from './Contect';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const toggleVisibility = () => {
      if ((window.pageYOffset) >= 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


useEffect(() => {
  const message = "front end developer";

  function type() {
    for (let i = 0; i <= message.length; i++) {
      setTimeout(() => {
        
        setText(message.substring(0, i));
      }, i * 200);
    }
  }

  type();
}, []);

const downloadCV = () => {
  
  const cvFile = '../cv/enas abdelmoaty elsaid.pdf';
  const downloadLink = document.createElement('a');
  downloadLink.href = cvFile;
  downloadLink.download = cvFile;
  downloadLink.click();
};
  return (

   
    <div className="AppHome d-flex flex-column ">
      
      <div  className='background'>
        <div className='content-background'>
           <p>
               <small> Enas </small>   Madina
          </p>
          <p>  Iam  <span className='text'>{text} </span> </p>
          <button className='btn download-cv mt-4' onClick={downloadCV}>  download My cv <DownloadIcon/> </button>
        </div>
          
      </div>
        <About/>
       <Skills />
       <Project/> 
       < Contect/>
    


       <span  className='sroll-button' >
       <ArrowUpwardIcon  className={`scroll-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}/> 
       </span>

      </div>
  )
}

export default Home
