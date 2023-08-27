
import './App.css';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Skills from './component/Skills';
import Contect from './component/Contect';


function App() {
  return (
    <>
   
    <Router>
    
       <Routes>
        <Route  path="/"  element={< Home/>}/>
        <Route  path="/about"  element={<About/>}/>
        <Route  path="/skill"  element={<Skills/>}/>
       <Route  path="/projects"  element={<Project/>}/> 
       <Route  path="/contect"  element={<Contect/>}/> 
    </Routes>
    </Router>
  </>
  );
}

export default App;
