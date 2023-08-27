import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import LinkIcon from '@mui/icons-material/Link';
import CardMedia from '@mui/material/CardMedia';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import "./DetaliesProject.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from 'react';
import Aos from 'aos';



const DetaliesProject = (props) => {
    /// 
    useEffect(()=>{
      Aos.init({duration:2000});
    },[])
  return (
   
     
      <Card sx={{ maxWidth: 345 }} className='m-2 card-all' data-aos="slide-right" >
     
      <CardMedia className='content-image'>
        <img    src={props.imgSrc} alt="recipe thumbnail"/>
        
       </CardMedia>
      
      <CardActions className='links-project w-100  d-flex justify-content-center' >
        
      <a href={props.herfGit}  className='d-block w-50 p-2' >  <GitHubIcon className='github-icon'/></a>
      {
          props.hrefDemo &&     <a href={props.hrefDemo}  className='d-block w-50 p-2' >  <RemoveRedEyeIcon className='github-icon'/></a>

      }
      </CardActions> 
    </Card>

      
    
  )
}

export default DetaliesProject

