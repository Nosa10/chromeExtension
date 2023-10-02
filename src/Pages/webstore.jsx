import react from 'react';
import Header from '../components/Header';
import './webstore.css'
import {Link} from "react-router-dom"

export default function Webstore() {
    return(
        <>
       <div className='header'>
      <div className='help'>
      <Link to="/landing"><img src='l.png' style={{marginTop: '-40px'}} /></Link>
       <div className='headerr'>
            <h1>HelpMeOut</h1>
            <Link to="/landing"><img src='helpmeout.png' /></Link>
            <a href="#"><img src='featured.png' /></a>
            <div className='ratings'>
              <img src='rating.png' />
              <p style={{color: '#0E75C5', marginLeft: '-60px'}} >Productivity</p>
              <p style={{fontSize: '10px', marginLeft: '-60px'}}>80,000+ users</p>
            </div>
        </div>
      </div>
      <button>Add to Chrome</button>
    </div>
    <div className='centeralign'> 
      <p className='current'>Overview</p>
      <p>Privacy Practices</p>
      <p>Review</p>
      <p>Related</p>
    </div>
    <div className='hero'>
      <img src='Start-helpmeout.png' />
      <div style={{display: 'block', padding:'20px', marginTop: '9%'}}>
        <img src='icon.png' />
        <h1>HelpMeOut</h1>
        <p>Help Out by creating videos and how to get things done</p>
      </div>

    </div>
     
        </>
    )
}