import React from "react";
import './UrRecording.css'
import Header from "../components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from "reactstrap";
import  {Link} from 'react-router-dom'
import { useState } from "react";
import Modal from '../components/Modal'

export default function UrRecording() {

    function myFunction() {
        // Get the text field
        var copyText = document.getElementById("myInput");
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        // Alert the copied text
        alert("Copied the URL: " + copyText.value);
      }
      
    const [form, setForm] = useState("")
    const [formData, setFormData] = useState("")
    const [show, setShow] = useState(false);
    const  handleChange = (event) => {
		setFormData(event.target.value);
	};
    const  change = (event) => {
		setForm(event.target.value);
	};
    return(
        <>
            <Header />
            <div>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <h3>Your Video is Ready!</h3>
                        <br />
                        <h6>Name</h6>
                        <h5>Untitled Video<span></span></h5>
                        <br /><br />

                        <form>
                            <input placeholder="enter email of receiver" type="email" value={form}
                            onChange={change}
                            />
                            <button type="submit"  >Send</button>
                        </form>
                        <button onClick={() => setShow(true)}>Send</button>
                            <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
                                <div style={{display: 'block'}}>
                                    <img src="success-kite1.png" style={{width: '50%'}}/>
                                </div>
                                <p style={{textAlign: 'center', fontSize: '24px', fontWeight:'500', lineHeight:'28px',color: '#08051E'}}>
                                    Your Video Link has been sent to</p>
                                <p style={{textAlign: 'center',fontSize: '24px', fontWeight:'500', lineHeight:'28px',
                            color: '#120B48'}}>johnmark@gmail.com</p> <br /><br />
                                <p style={{textAlign: 'center'}}>Would you need this video for later?</p> <br />
                                <p style={{textAlign: 'center'}}>Save it for later</p>
                                <button className="save-button" href="#" style={{textAlign: 'center'}}>Save Video</button> <br /><br />

                                <p className="dont" style={{textAlign: 'center'}}>Don't have an account? <span className="dont"><a href="#">Create account</a></span></p>
                                
                            </Modal>
                        <br /><br />
                        <div>
                            <h5 className="h5"> Video URL</h5>
                            <input 
                            value = {formData}
                            id="myInput"
                            onChange={handleChange}
                             />
                             <button style={{background: 'transparent', border: '1px solid #120B48', color: '#120B48'}} onClick={myFunction}>Copy</button>   
                        </div>
                        <br/> <br />
                        <h6 className="h6">Share your video</h6>
                        <img src="facebook.png" style={{cursor: 'pointer'}} />
                        <img src="whatsapp.png" style={{cursor: 'pointer'}}/>
                        <img src="telegram.png"style={{cursor: 'pointer'}} />
                    </Col>
                    <Col md={6} xs={12}>
                        <div>
                        <img src="video.png" style={{width: '80%'}} />
                        <br /><br /><br />

                        <h5 className="h">Transcript</h5>
                        <select>
                            <option>English</option>
                        </select>
                        <br />
                        <div className="transcript">
                        <div style={{display: "flex", justifyContent:'space-around'}}>
                                <p className="timestamp">0.01</p>
                                <p className="transcript-paragraph">First step. Open Facebook on your desktop or mobile device 
                                    and locate "Marketplace" 
                                    in the left-hand menu or at the top of the </p>
                            </div>
                                    
                            <div style={{display: "flex", justifyContent:'space-between'}}>
                                <p className="timestamp">0.15</p>
                                <p className="transcript-paragraph">First step. Open Facebook on your desktop or mobile device 
                                    and locate "Marketplace" 
                                    in the left-hand menu or at the top of the </p>
                            </div>
                            <div style={{display: "flex", justifyContent:'space-between'}}>
                                <p className="timestamp">1.00</p>
                                <p  className="transcript-paragraph">First step. Open Facebook on your desktop or mobile device 
                                    and locate "Marketplace" 
                                    in the left-hand menu or at the top of the </p>
                            </div>
                            
                        </div>
                        </div>
                        
                    </Col>
                </Row>
                <div  className= 'save'>
                <h2>To ensure the availability and privacy of your video, we recommend saving it to your account.</h2> <br /><br />
                <Link to="/repository"><button className="save-button">Save Video</button></Link> <br /><br />

                <p className="dont">Don't have an account? <span className="dont"><a href="#">Create account</a></span></p>
            </div>

            
            </Container>
            </div>
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
    )
}