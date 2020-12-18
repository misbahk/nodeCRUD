import React, { Component } from 'react';
import { Card, Button, Row, Col, Table, Form, Modal} from 'react-bootstrap';
import axios from 'axios';


export class listDetails extends Component {

state={
    studentlist:[],
    Name:''
}

componentDidMount(){
    axios.get('http://localhost:5000/studentgetInfo')
    .then(res=>{
      this.setState({
        studentlist:res.data
      })
      console.log("listtt", res)
    })
    
    }


    handlechange=(e)=>{
this.setState({
  Name:e.target.value
})
    }

filteredData=(e)=>{
  e.preventDefault();
  axios.post("http://localhost:5000/filtereddname",{Name:this.state.Name})
.then(res=>{
  console.log("filtered", res)
})
}


  render() {
    return (
      <div>
       <h1>List student details</h1> 

       <table class="table">


<div className="scroll" style={{border:"0"}}>

  <tbody style={{textAlign:"left"}}>
 <thead>
    <tr>
   
     <th>student name</th>
     <th>student class</th>
     <th>student number</th>

     </tr>
     </thead>

  {this.state.studentlist.map((index)=>{
return(
    <>
    <tr>
<td> {index.Name}   </td>
<td>{index.className}</td>
<td>{index.studentNumber}</td>
    </tr>
    </>
)
})}

  </tbody>
  </div>

  </table>

  <h1>Filtered data</h1>

<form>
  <input type="text" onChange={this.handlechange}>
  
  </input>
  <button type="submit" onClick={this.filteredData}>finnnd</button>
</form>

      </div>
    );
  }
}

export default listDetails;
