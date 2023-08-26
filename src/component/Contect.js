import React, { useState } from 'react';
import "./Contact-us.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import Alert from 'react-bootstrap/Alert';

const Contect = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [subject,setSubject]=useState("");
  const [message,setMessage]=useState("");
  const [succes,setSucces]= useState(false);
  
  const handleNameChange = (e)=> {
   setName(e.target.value)
  };
  const handleEmailChange = (e)=> {
    setEmail(e.target.value)
   }
   const handleSubjectChange = (e)=> {
    setSubject(e.target.value)
   }
   const handleMessageChange = (e)=>{
    setMessage(e.target.value)
   }
  const  handleSubmit  = (e)=>{
    e.preventDefault();
     // Save data to localStorage
     localStorage.setItem('name', name);
     localStorage.setItem('email', email);
     localStorage.setItem('message', message);
     setSucces(true);

     setTimeout(() => {
      setSucces (false);
    }, 1000);
     
     // Reset form fields


     setName('');
     setEmail('');
     setSubject('');
     setMessage('');

  }

  return (
    <>
    {
     succes &&  <Alert  variant='success' className='succes-alert'>  succes to add message  </Alert>
        
     
    }
   
   
    <div   className='all-content'>
    <div className='contact-us-page  w-100'>
        <div   className='container'>
        <div  className='title'>
         <h1 className='mt-4'>  Contact   </h1>
       </div>
       <div  className='contact-us-content  mt-4 row'>
        <div   className='contac-links col-md-5'>
            <div   className='content-link'>
                <ul>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://api.whatsapp.com/send?phone=01097499806" className='mx-2'>  <WhatsAppIcon />  </a>   <span>   01097499806</span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a  href="mailto:enasmadina@gmail.com" className='mx-2'>  <EmailIcon />  </a>   <span>  enaselsaidmadina@gmail.com </span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://github.com/Enasmadin" className='mx-2'>  <GitHubIcon />  </a>   <span> Enasmadin </span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://www.linkedin.com/in/enas-madina-8300041a5" className='mx-2'>  <LinkedInIcon />  </a>   <span> Enas madina </span>  </li>
                </ul>
              
            </div>
    
            <div>

            </div>

        </div>
      <div   className='send-message col-md-6 offset-md-1'>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-4">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" value={name}  onChange={handleNameChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={handleEmailChange}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Label> Subject </Form.Label>
        <Form.Control placeholder="Enter subject"   value= {subject}  onChange={handleSubjectChange}  />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox"  value ={message}  onChange={handleMessageChange}  >
         <Form.Label> Message </Form.Label>
        <Form.Control as="textarea" rows={8} />
      </Form.Group>
        <div  className='d-flex w-100 justify-content-center '>
        <Button variant="primary" type="submit" className='px-4'>  
           send Message 
        </Button>
        </div>  
    </Form>
   </div>
    </div>
    </div>
    </div>
  </div>
       
  </>
  )
}



export default Contect
