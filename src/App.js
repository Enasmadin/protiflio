
import './App.css';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Sidebar from './component/Sidebar';
import Project from './component/Project';

function App() {
  return (
    <>
    <div  className='d-flex w-100'>
    <Router>
     <div className="sidebar-app">
     <Sidebar />
     </div>
        
    
      
       <div className='d-flex flex-column'>
       <Routes>
        <Route  path="/"  element={< Home/>}/>
        <Route  path="/about"  element={<About/>}/>
        <Route  path="/projects"  element={<Project/>}/>
       </Routes>
       <About/>
       <Project/>
       </div>
    </Router>
 
  </div>

  </>
  );
}

export default App;
