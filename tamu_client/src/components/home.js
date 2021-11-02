import React from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
//import Login from './login';
import './styles/home.css';

import logo from '../images/logo.png';
import salmon from '../images/salmon.jpg';
import macarons from '../images/macarons.webp';
import hambunger from '../images/hambunger.jpg';

function Home () {

    return(
        <div className="home">
         <Row>
         {/* <Col sm={2} md={2} xs={2}>
           <Card>
             <Card.Header>Hey</Card.Header>
             <Card.Body>hey hey hey </Card.Body>
           </Card>
         </Col> */}
         <Col className="carousel" sm={12} md={12} xs={12}>
          {/* <div className="img-thumbnail" id="thumbnail">
          <img src={logo} alt="home image"/>
          </div> */}

          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src= {salmon} alt = "...."
              />
              <Carousel.Caption>
                  <h3>Salmon</h3>
                  <p>par</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src= {macarons} alt = "...."
              />
              <Carousel.Caption>
                  <h3>Macarons</h3>
                  <p>par</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src= {hambunger} alt = "...."
              />
              <Carousel.Caption>
                  <h3>Hambunger</h3>
                  <p>par</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

         </Col>
         {/* <Col sm={2} md={2} xs={2}>
           <Card>
             <Card.Header>Hey</Card.Header>
             <Card.Body>hey hey hey </Card.Body>
           </Card>
         </Col> */}
       </Row>


       <Row>
         <Col sm={6} md={3} xs={3}>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={salmon} />
             <Card.Body>
               <Card.Title>Salmon</Card.Title>
               <Card.Text>
                 What is salmon ?????
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
         <Col sm={6} md={3} xs={3}>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={salmon} />
             <Card.Body>
               <Card.Title>Salmon</Card.Title>
               <Card.Text>
                 What is salmon ?????
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
         <Col sm={6} md={3} xs={3}>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={salmon} />
             <Card.Body>
               <Card.Title>Salmon</Card.Title>
               <Card.Text>
                 What is salmon ?????
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
         <Col sm={6} md={3} xs={3}>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={salmon} />
             <Card.Body>
               <Card.Title>Salmon</Card.Title>
               <Card.Text>
                 What is salmon ?????
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       </Row>
    
    

    </div>
    );
};


export default Home;