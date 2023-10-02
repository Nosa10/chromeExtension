import React from "react";
import './SingleVideo.css'
import { Col, Container, Row } from "reactstrap";

export default function SingleVideo() {
    return(
       <div className="repository">
        <hr />
        <Container>
                    <div className='person'>
                        <img src="frame.png" />
                        <p style={{fontSize: '16px', fontWeight: '400', lineHeight:'19px', letterSpacing:'0em'}}>John Mark</p>
                    </div>
                    <br /><br />
                    <p>Home / Recent Videos / <span style={{color:'#413C6D'}}>How to create a FaceBook Ad Lisitng</span></p>

                    <h4 className="video-title">How to Create a FaceBook Ad Listing</h4>
                    <div className="web">
                        <img src="webcard.png" />
                    </div>
                    <Row>
                        <Col xs= {12}md={6}>
                            <form>
                            <input placeholder="enter email of receiver" type="email"
                            />
                            <button type="submit" >Send</button>
                            </form>
                                <br /><br />
                            </Col>
                            <Col xs={12} md={6}>
                            <div>
                            <input  placeholder="https://www.helpmeout/Untitled_Video_20232509"
                            
                             />
                             <button style={{background: 'transparent', border: '1px solid #120B48', color: '#120B48'}}>Copy</button>   
                        </div>
                            </Col>
                        </Row>
                            
                        <br /><br />
                        
                        <br/> <br />
                        <h6 className="h6">Share your video</h6>
                        <img src="facebook.png" style={{cursor: 'pointer'}} />
                        <img src="whatsapp.png" style={{cursor: 'pointer'}}/>
                        <img src="telegram.png"style={{cursor: 'pointer'}} />
                        <br /><br />

                        <h5 className="h">Transcript</h5>
                        <select>
                            <option>English</option>
                        </select>
                        <br />
                        <div className="transcrip">
                        <div style={{display: "flex", justifyContent:'space-around'}}>
                                <p className="timestamp">0.01</p>
                                <p className="transcrip-paragraph">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or 
                                    mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>
                            </div>
                                    
                            <div style={{display: "flex", justifyContent:'space-between'}}>
                                <p className="timestamp">0.15</p>
                                <p className="transcrip-paragraph">First step. Open Facebook on your desktop or mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or
                                 mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>
                            </div>
                            <div style={{display: "flex", justifyContent:'space-between'}}>
                                <p className="timestamp">1.00</p>
                                <p  className="transcrip-paragraph">First step. Open Facebook on your desktop or 
                                mobile device and locate "Marketplace" in the left-hand menu or at the top of the First step. Open Facebook on your desktop or 
                                mobile device and locate "Marketplace" in the left-hand menu or at the top of the  </p>
                            </div>
                            
                        </div>
        </Container>
       </div>
    )
}