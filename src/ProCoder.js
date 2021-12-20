import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap';
import Cardcom from "./Card";
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
      alert("enter only number")
      return;
    }
    const usrpass=document.getElementById("confirmp").value;
    if(usrpass ==""){
      alert("enter confirm password")
      return;
    }
    if(usrpass !== pass){
      alert("password didnt match")
      return;
    }
    const mobile = document.getElementById("mobile").value;
    if (/^[a-z,A-Z]+$/.test(mobile)){
      alert("include numbers only")
      return;
    }
    if(mobile.length<10){
      alert("enter min of 10 digitd")
      return;
    }
    const mob =mobile.indexOf("+")
    if(mob ==-1){
      alert("include + in phone no")
      return;
    }
    const Checkbox =  document.getElementById("check");
    if((!Checkbox[0].checked) && (!Checkbox[1].checked)){
      alert("check radio")
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
    <Form.Control id="confirmp" type="password" placeholder="Cnfirm Password" />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group  className="mb-3 mt-3" >
      <Form.Label>Enter Your Mobile No.</Form.Label>
      <Form.Control id='mobile' type="text" placeholder="Enter Mobile No" />
    </Form.Group>
    </Col>
                </Row>
                <Row style={divStyle} >
                  <Col>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Male" id="check" value="male" />
                  <Form.Check type="checkbox" label="FeMale" id="check" value="female" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  </Form.Group>
                  </Col>
                   </Row>
  <Button className='container' variant="primary" type="submit" onClick={onclick} >
    Submit
  </Button>
  
</Form>
<div className='d-flex align-items-center justify-content-around pt-5 pb-5'>
<Cardcom
src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
title="React"
text="This Card shows the pic of react if you want to know more click button below"

/>
<Cardcom
src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
title="Node"
text="This Card shows the pic of Node if you want to know more click button below"
/>
<Cardcom
src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
title="React"
text="This Card shows the pic of react if you want to know more click button below"
/>

</div>
        </div>
    )
}

export default ProCoder
