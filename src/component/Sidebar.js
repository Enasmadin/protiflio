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
