import React from 'react';
import "./Contact-us.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contect = () => {
  return (
    <div   className='all-content'>
    <div className='contact-us-page '>
        <div   className='container'>
        <div  className='title'>
         <h1 className='mt-4'>  Contact   </h1>
       </div>
       <div  className='contact-us-content  mt-4 row'>
        <div   className='contac-links col-md-3'>
            <div   className='content-link'>
                <ul>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://api.whatsapp.com/send?phone=01097499806" className='mx-2'>  <WhatsAppIcon />  </a>   <span>   01097499806</span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a  href="mailto:enasmadina@gmail.com" className='mx-2'>  <EmailIcon />  </a>   <span>  enaselsaidmadina@gmail.com </span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://github.com/Enasmadin" className='mx-2'>  <GitHubIcon />  </a>   <span> Enasmadin </span>  </li>
                    <li className='d-flex align-items-center mb-2'>  <a   href="https://www.linkedin.com/in/enas-madina-8300041a5" className='mx-2'>  <LinkedInIcon />  </a>   <span> Enasmadin </span>  </li>
                  

     
                </ul>
                
                    
                    
               
              
            </div>
            <div>

            </div>

        </div>
      <div   className='send-message col-md-6 offset-md-3'>
      <Form>
      <Row className="mb-4">
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

    
      </Row>

      <Form.Group className="mb-4" controlId="formGridAddress1">
        <Form.Label> Subject </Form.Label>
        <Form.Control placeholder="Enter subject" />
      </Form.Group>

     


      <Form.Group className="mb-3" id="formGridCheckbox">
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
       
    
  )
}

export default Contect
