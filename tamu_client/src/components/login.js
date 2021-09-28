import React from 'react';
import {Row, Col, Card } from 'react-bootstrap';
import logo from '../images/logo.png';
import './styles/login.css';

function Login () {

    return(
        <Row>
            <Col sm md={6} xs>
                <img className="login-logo" alt="logo" src={logo} />
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