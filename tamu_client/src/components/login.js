import React from 'react';
import {Row, Col, Card } from 'react-bootstrap';

function Login () {

    return(
        <Row>
            <Col sm md={6} xs>
                <h3>Image</h3>
            </Col>
            <Col sm md={6} xs>
                <Card>
                    <Card.Header><h3>Login</h3></Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Login;