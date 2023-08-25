
import './App.css';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Sidebar from './component/Sidebar';
import Project from './component/Project';
import Skills from './component/Skills';
import Contect from './component/Contect';
// import{WrappedMap} from"./component/Contect"



function App() {
  return (
    <>
    <div  className='d-flex w-100'>
    <Router>
     <div className="sidebar-app">
     <Sidebar />
     </div>
     <div className='d-flex flex-column w-100'>
  
       <Routes>
        <Route  path="/"  element={< Home/>}/>
        <Route  path="/about"  element={<About/>}/>
        <Route  path="/skill"  element={<Skills/>}/>
       <Route  path="/projects"  element={<Project/>}/> 
       <Route  path="/contect"  element={<Contect/>}/> 

     
       </Routes>
      </div>
    </Router>
    <div>
    {/* <div style={{ width: '100vw', height: '100vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div> */}
    </div>
 
  </div>
  
  </>
  );
}

export default App;
