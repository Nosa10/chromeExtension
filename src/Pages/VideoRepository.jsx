import React from "react";
import './Repository.css';
import { Col, Container, Row } from "reactstrap";
import {Link} from 'react-router-dom'

export default function VideoRepository() {
    return(
        
            <div className="repository">
                <hr />
                <Container>
                    <div className='person'>
                        <Link to='/landing'><img src="frame.png" /></Link>
                        <p style={{fontSize: '16px', fontWeight: '400', lineHeight:'19px', letterSpacing:'0em'}}>John Mark</p>
                    </div>
                    <br /><br />

                    <Row className="person">
                        <Col xs={6}>
                            <h4>Hello, John Mark</h4>
                            <p>Here are your recorded videos</p>
                        </Col>
                        <Col xs={6}>
                        <img src="search-bar.png" className="img"/>
                        </Col>
                        
                    </Row> <br /><br />
                    <h6 className="h66">Recent Files</h6><br />
                    <Row>
                        <Col xs={12} md={6}>
                            <Link to="/single"><img src="web-card1.png" className="img" /></Link>
                        </Col>
                        <Col xs={12} md={6}>
                        <Link to="/single"><img src="web-card2.png" className="img" /></Link>
                        </Col>
                    </Row>
                    <h6 className="h66">Files from Last week</h6><br />
                    <Row>
                        <Col xs={12} md={6}>
                        <Link to="/single"><img src="web-card1.png" className="img" /></Link>
                        </Col>
                        <Col xs={12} md={6}>
                        <Link to="/single"><img src="web-card2.png" className="img" /></Link>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        
    )
}