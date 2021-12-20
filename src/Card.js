import React from 'react';
import {Card,Button} from 'react-bootstrap';
const Cardcom = ({src,title,text,}) => {
    return (
        <div  >
            <Card style={{background:'grey', width: '18rem',border:"2px solid red",height:'25rem',textAlign:"center" }}>
  <Card.Img className='pt-2 mt-3' style={{width:"100px",height:"100px",borderRadius:"100px",border:'2px solid black',transform:"translateX(90px)",}} variant="top" src={src} />
  <Card.Body>
    <Card.Title><h1>{title}</h1></Card.Title>
    <Card.Text>
     {text}
    </Card.Text>
    <Button variant="primary" onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      
      }}  >Click</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Cardcom
