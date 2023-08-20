import React, { useEffect, useState } from 'react';
import './home.css';
import DownloadIcon from '@mui/icons-material/Download';
const Home = () => {
  const [text, setText] = useState("");

useEffect(() => {
  const message = "front end developer";

  function type() {
    for (let i = 0; i <= message.length; i++) {
      setTimeout(() => {
        // setText(text + message[i++]);
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
    <div className="AppHome">
      <div  className='background'>
        <div className='content-background'>
           <p>
               <small> Enas </small>   Madina
          </p>
          <p>  Iam  <span className='text'>{text} </span> </p>
          <button className='btn download-cv mt-4' onClick={downloadCV}>  download My cv <DownloadIcon/> </button>
        </div>
          
      </div>
 

    </div>
  )
}

export default Home
