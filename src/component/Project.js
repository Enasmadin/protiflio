
import "./project.css";
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab, tabClasses } from '@mui/base/Tab';
import DetaliesProject from './My-Project/DetaliesProject';
import data  from "../data/data"
import Sidebar from "./Sidebar";


const Project = () => {

  //all data 
  const dataProjects = data;

  // Filter the data by  catogary
  const sassProject = dataProjects.filter(item => item.catogray === "sass");
  const jsProject = dataProjects.filter(item => item.catogray === "Js");
  const jquaryProject = dataProjects.filter(item => item.catogray === "Jquary");
  const reactProject = dataProjects.filter(item => item.catogray === "React");
  const AngularProject = dataProjects.filter(item => item.catogray === "Angular");
 

  return (

     <div className='project-page container'> 
      <div className= "sidebar-app">
        <Sidebar />
        </div>
     <div   className='title'>
         <h1 className='mt-4'>  Projects   </h1>
       </div>
       <div   className='project-page-content mt-4'>
               <p> Here are my projects, which include small learning projects and advanced ones</p>
       </div> 
       
       <Tabs defaultValue={0}>
       <div  className='route-project mt-4'>
          <StyledTabsList>
            <StyledTab value={0} className="tabs">All</StyledTab >
            <StyledTab value={1} className="tabs"> SASS</StyledTab>
            <StyledTab value={2} className="tabs"> JS</StyledTab>
            <StyledTab value={3} className="tabs"> Jquary</StyledTab>
            <StyledTab value={4} className="tabs"> ReactJS</StyledTab>
            <StyledTab value={5} className="tabs"> Angular </StyledTab>
          
          </StyledTabsList>
          </div>
          <StyledTabPanel value={0}> 
          <div  className="row ">
          {dataProjects.map((alldata)=>(
           
           <div  className=' small-card col-sm-12 col-md-4 col-lg-4' key={alldata.id}>
              <DetaliesProject hrefDemo={alldata['Link-demo']} herfGit={alldata['link-github']} imgSrc={alldata.image} className="col-md-1"  /> 
            
          </div> 
          ))}
            
           </div>
          
          </StyledTabPanel>
          <StyledTabPanel value={1}>
          <div  className="row ">
          {sassProject.map((dataSass)=>(
           
           <div  className=' small-card  col-sm-12 col-md-4 col-lg-4' key={dataSass.id}>
              <DetaliesProject hrefDemo={dataSass['Link-demo']} herfGit={dataSass['link-github']} imgSrc={dataSass.image} className="col-md-1"  /> 
            
          </div> 
          ))}
            
           </div>
          </StyledTabPanel>
          <StyledTabPanel value={2}>
          <div  className="row ">
          {jsProject.map((dataJs)=>(
           
           <div  className=' small-card col-sm-12 col-md-4 col-lg-4' key={dataJs.id}>
              <DetaliesProject hrefDemo={dataJs['Link-demo']} herfGit={dataJs['link-github']} imgSrc={dataJs.image} className="col-md-1"  /> 
            
          </div> 
          ))}
            
           </div>
          
          </StyledTabPanel>
          <StyledTabPanel value={3}>
          <div  className="row ">
          {jquaryProject.map((dataJquary)=>(
           
           <div  className='small-card  col-sm-12 col-md-4 col-lg-4' key={dataJquary.id}>
              <DetaliesProject hrefDemo={dataJquary['Link-demo']} herfGit={dataJquary['link-github']} imgSrc={dataJquary.image} className="col-md-1"  /> 
            
          </div> 
          ))}
            
           </div>
          </StyledTabPanel>
          <StyledTabPanel value={4}>
          <div  className="row ">
          {reactProject.map((dataReact)=>(
           
           <div  className='small-card col-sm-12 col-md-4 col-lg-4' key={dataReact.id}>
              <DetaliesProject hrefDemo={dataReact['Link-demo']} herfGit={dataReact['link-github']} imgSrc={dataReact.image} className="col-md-1"  /> 
          </div> 
          ))}
            
           </div>
          </StyledTabPanel>
          <StyledTabPanel value={5}>
          <div  className="row ">
          {AngularProject.map((dataAngular)=>(
           
           <div  className=' small-card col-sm-12 col-md-4 col-lg-4' key={dataAngular.id}>
              <DetaliesProject hrefDemo={dataAngular['Link-demo']} herfGit={dataAngular['link-github']} imgSrc={dataAngular.image} className="col-md-1"  /> 
            
          </div> 
          ))}
            
           </div>
          </StyledTabPanel>
        </Tabs>
     
       

        </div>
       
     
  )
};
const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#173b6c',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: #fff;
  cursor: pointer;
  font-size:1.1rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    // background-color: ${blue[400]};
    color: ${blue[600]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    // background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  // opacity: 0.6;
  margin-bottom:30px;
  `,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 20px;
  margin-top:16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);


export default Project
