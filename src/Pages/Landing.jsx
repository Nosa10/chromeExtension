import React from "react";
import './Landing.css'
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "reactstrap";

export default function Landing() {
  return(
    <>
        <Header />
        <Container className="contain">
          <Row>
            <Col xs={12} md={6}>
              <h1 className="tags" style={{textAlign: "left"}}>Show Them <br/> Don't Just Tell</h1>
              <p style={{textAlign: "left"}}>Help your friends and loved ones by creating and sending videos on 
                how to get things done on a website.</p>
                <button className="button" style={{textAlign: "center", marginLeft: '0'}}>Install HelpMeOut</button>
            </Col>
            <Col xs={12} md={6}>
              <Row>
                <Col md={6} sm={12}>
                  <Row>
                    <Col>
                      <img src="grandma.png" id="pictures" style={{ marginLeft: '0'}}/>
                    </Col>
                    <Col>
                      <img src="laptop.png" id="pictures" style={{marginLeft: '0'}}/>
                    </Col>
                  </Row>
                </Col>
                <Col md={6} sm={12}>
                  <img src="womanwithphone.png" id="pictures" style={{width: '100%', marginLeft: '0'}} />
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="features">
              <h2 style={{textAlign: 'center'}} className="tags">Features</h2>
              <p style={{textAlign: 'center'}}>Key Highlights of our extension</p>
          </div>
          <div className="features">
            <Row>
              <Col md={6} sm={12}>
                <img src="Check.png" />
              </Col>
              <Col md={6} sm={12}>
                <img src="video-repository.png" />
              </Col>
            </Row>
          </div>

          <div className="features" style={{marginBottom: '5%'}}>
          <h2 style={{textAlign: 'center'}} className="tags">How It Works</h2>
          <Row>
            <Col md={4} sm={12}>
              <img src="one.png" />
            </Col>
            <Col md={4} sm={12}>
              <img src="two.png" />
            </Col>
            <Col md={4} sm={12}>
              <img src="three.png" />
            </Col>
          </Row>
          </div>
          </Container>
          <div className="footer" >
            <Container>
            <Row>
              <Col md={3} xs={6}>
                <img src="footer-logo.png" />
              </Col>
              <Col md={3} xs={6}>
                <h1>Menu</h1>
<br></br>
<p>Home</p>
<br></br>
<p>Converter</p>
<br></br>
<p>How it works</p>
              </Col>
              <Col md={3} xs={6}>
                <h1>About Us</h1>
<br></br>
<p>About</p>
<br></br>
<p>Contact Us</p>
<br></br>
<p>Privacy Policy</p>
              </Col>
              <Col md={3} xs={6}>
                <h1>Screen Record</h1>
<br></br>
<p>Browser Window</p>
<br></br>
<p>Desktop</p>
<br></br>
<p>Application</p>
              </Col>
              
            </Row>
            </Container>
          </div>
        
        
    </>
)}