import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
 
 import AppsIcon from '@mui/icons-material/Apps';
import './sidebar.css';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Sidebar = () => {
  return (
    
  //   <Navbar expand="lg" className=" navbar">
  //   <Container fluid>
      
  //     <Navbar.Toggle aria-controls="navbarScroll" />
  //     <Navbar.Collapse id="navbarScroll">
  //       <Nav
  //         className="me-auto  my-lg-0 d-flex  flex-column w-100  align-items-center "
  //         navbarScroll 

  //       >
  //             <div  className='image'>  <img src= {personal}  alt="personal" /> </div> 
  //             <div   className='name'>
  //                <p>  Enas Madina </p>
  //             </div>
  //             <div  className='social-media'>
  //               <a href='https://www.linkedin.com/in/enas-madina-8300041a5'>  <LinkedInIcon  className='linkedIn-icon'/></a>
  //               <a href='https://github.com/Enasmadin'>  <GitHubIcon className='github-icon'/></a>
    
  //             </div>
             
  //             <div  className="links w-100">
  //                <ul className='mt-5'>
  //                 <li>
  //                  <NavLink to="/" className='link-one'> <HomeIcon   className='icon-hover' activeclassname="active"/>  <span  >Home</span> </NavLink>   
  //                 </li>
  //                 <li>
  //                  <NavLink to="/about" className='link-one'> <PersonIcon  className='icon-hover' activeclassname="active"/>   <span>About</span> </NavLink>    
  //                 </li>
  //                 <li>
  //                  <NavLink to="/skill" className='link-one'> <PsychologyIcon  className='icon-hover' activeclassname="active"/>  <span> Skills </span>    </NavLink>  
  //                 </li>
  //                 <li>
  //                  <NavLink to="/projects" className='link-one'> <AppsIcon  className='icon-hover' activeclassname="active"/>  <span>Project</span>    </NavLink>  
  //                 </li>
  //                </ul>
  //             </div>
           
  //       </Nav>
       
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  <div className='link-page'>

 <div  className="links w-100">
              <ul>
              <li>
                   <NavLink to="/" className='link-one'> <HomeIcon   className='icon-hover' activeclassname="active"/>   </NavLink>   
                  </li>
                 <li>
                  <NavLink to="/about" className='link-one'> <PersonIcon  className='icon-hover' activeclassname="active"/>    </NavLink>    
                </li>
                 <li>
                    <NavLink to="/skill" className='link-one'> <PsychologyIcon  className='icon-hover' activeclassname="active"/>     </NavLink>  
                </li>
                <li>
                 <NavLink to="/projects" className='link-one'> <AppsIcon  className='icon-hover' activeclassname="active"/>      </NavLink>  
                  </li>
                  <li>
                   <NavLink to="/contect" className='link-one'> <ConnectWithoutContactIcon  className='icon-hover' activeclassname="active"/>      </NavLink>  
                  </li>
                 </ul>
            </div>
  </div>

  )
}

export default Sidebar
