import React, { Component } from 'react';
import { Button, Row , Col, Form} from 'react-bootstrap';
import axios from 'axios';

export class registerDetails extends Component {

    state={
        Name:'',
        className:'',
        studentNumber:null
      }

      handleChange=(e)=>{
        this.setState({    
         [e.target.name]: e.target.value
      
        })
      }


      submitHandle=(e)=>{

        e.preventDefault();
      
        axios.post('http://localhost:5000/studentINFOpost',{Name:this.state.Name,className:this.state.className,studentNumber:this.state.studentNumber})
        .then(res=>{
      console.log("thennn", res)
        })
        .catch(res=>{
          console.log("catch", res)
        })
         
      }


  render() {
    return (
      <div>
    <Form>
 
<h1>Register student details</h1>
 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="2">
     student name
   </Form.Label>
   <Col sm="10">
     <Form.Control  name="Name" onChange={this.handleChange} type="text" placeholder=" enter student name" />
   </Col>
 </Form.Group>


 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="2">
   student   classname
   </Form.Label>
   <Col sm="10">
     <Form.Control name="className" onChange={this.handleChange}
      type="text" placeholder=" enter  student classname" />
   </Col>
 </Form.Group>
 <Form.Group as={Row} controlId="formPlaintextPassword">
   <Form.Label column sm="2">
      student Number
   </Form.Label>
   <Col sm="10">
     <Form.Control name="studentNumber" onChange={this.handleChange}
      type="number" placeholder=" enter student classnumber" />
   </Col>
 </Form.Group>


 <Button  onClick={this.submitHandle}
  variant="primary" type="submit">
    Register
  </Button>
<br/>
  <a href="listDetails">check student list here</a>

</Form>
      </div>
    );
  }
}

export default registerDetails;
