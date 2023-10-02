import React from "react";

import './Login.css'
import { Label } from "reactstrap";

export default function Login() {
    return(
        <div className="login">
            <hr></hr>
            <img src="frame.png"/>
            <div className="signup">
                <h1>Log In or sign Up</h1>
                <h6 style={{textAlign:"center"}}>Join millions of others in sharing successful moves on 
                    <span> HelpMeOut</span>
                </h6>
                <br /><br />
                <button className="btn" style={{marginLeft: '0', fontSize: '16px', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.01em'}}>Continue with Google</button>
                <br />
                <br />
                <button className="btn" style={{marginLeft: '0', fontSize: '16px', fontWeight: '500', lineHeight: '24px', letterSpacing: '0.01em'}}>Continue with Facebook</button>
                <br /> <br />
                <hr />
                <br />

                <form>
                    <label for="email " style={{fontSize: '14px', fontWeight: '500', lineHeight: '16px'}}>Email</label>
                    <br />

                    <input placeholder="Enter your email address" />
                    <br /><br />
                    <label for="password" style={{fontSize: '14px', fontWeight: '500', lineHeight: '16px'}}>Password</label> <br />
                    <input placeholder="Enter your password" />
                    <br /><br />
                    <input type="submit" value='Sign Up' style={{background: '#120B48',fontSize: '18px',fontWeight: '500',lineHeight: '21px',
                    letterSpacing: '0em',textAlign: 'center', color:  ' #F9F9FF'
                    }} />

                </form>
            </div>

        </div>
    )
}