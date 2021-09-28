import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Login from './login';
import './styles/home.css';

function Home () {

    return(
        <div className="home">
         {/* <Row>
         <Col sm md xs>
           <Card>
             <Card.Header>Hey</Card.Header>
             <Card.Body>hey hey hey </Card.Body>
           </Card>
         </Col>
         <Col sm md xs>
           <Card>
             <Card.Header>Hey</Card.Header>
             <Card.Body>hey hey hey </Card.Body>
           </Card>
         </Col>
         <Col sm md xs>
           <Card>
             <Card.Header>Hey</Card.Header>
             <Card.Body>hey hey hey </Card.Body>
           </Card>
         </Col>
       </Row>
     */}
    <Login />

    </div>
    );
};


export default Home;