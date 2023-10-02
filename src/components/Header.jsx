import react from 'react';
import './Header.css'

export default function Header() {
    return (
      <>
        <div className= "head" >
          <img src='frame.png' />
          <div style={{display: 'flex'}}>
            <h6 style={{ marginRight:'20px'}}>Features</h6>
            <h6 >How it works</h6>
          </div>
          <h2 style={{color: '#120B48'}}>Get started</h2>
        </div>
      </>
    )
}