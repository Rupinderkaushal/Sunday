import React from 'react';
import {Form,Button,Row,Col} from 'react-bootstrap'
const ProCoder = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Col style={{border:"2px solid green"}}  md="3">
                    <Form.Group  className="mb-3 mt-3" controlId="formBasicEmail">
    <Form.Label  >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
                    </Col>
                    <Col style={{border:"2px solid green"}}  md="3">
                    <Form.Group  className="mb-3 mt-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
                    </Col>
                </Row>
  

  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default ProCoder
