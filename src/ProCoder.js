import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
const ProCoder = () => {
  const divStyle= {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }
  const onclick =(e)=>{
    e.preventDefault()
    const x = document.getElementById("email").value;
    if(x == ""){
      alert("enter email")
      return;
    }
    const y = x.indexOf("@");
      if(y == -1){
        alert("include @")
      return;
      }
    const z= x.indexOf(".com");
      if(z == -1)
    {
      alert("include .com")
      return;
    }
    const pass = document.getElementById('password').value;
    if(pass ==""){
      alert("enter password")
      return;
    }
    if(/^[a-z,A-Z\b]+$/.test(pass)){
      alert("enter only integer")
      return;
    }
    
  }
    return (
        <div>
            <Form   className='container bg-danger form'>
                <Row style={divStyle} >
                    <Col>
                    <Form.Group  className="mb-3 mt-3 " controlId="formBasicEmail">
    <Form.Label  >Email address</Form.Label>
    <Form.Control id="email" type="email" placeholder="Enter email" />
    
  </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group  className="mb-3 mt-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  id="password" type="password" placeholder="Password" />
  </Form.Group>
                    </Col>
                </Row>
                <Row style={divStyle}>
    <Col>
    <Form.Group className="mb-3 mt-3" >
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control className="confirmp" type="password" placeholder="Cnfirm Password" />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group  className="mb-3 mt-3" >
      <Form.Label>Enter Your Mobile No.</Form.Label>
      <Form.Control className='mobile' type="text" placeholder="Enter Mobile No" />
    </Form.Group>
    </Col>
                </Row>
                <Row style={divStyle} >
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check className="checkbox" type="checkbox" label="Male" value="male" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check className="checkbox" type="checkbox" label="FeMale" value="female" />
                  </Form.Group>
                  </Col>
                   </Row>
  <Button className='container' variant="primary" type="submit" onClick={onclick} >
    Submit
  </Button>
</Form>
        </div>
    )
}

export default ProCoder
