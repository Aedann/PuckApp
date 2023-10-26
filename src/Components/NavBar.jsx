import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Puck from '../PUCK.png';

function NavBar({isMenuOpen, setIsMenuOpen}){
    function handleDevelop(e){
        if (e.target === e.currentTarget) {
            setIsMenuOpen(false);
            console.log("Clicked Outside")
        }
    }

  return (
    <div className={`bluredBackground`} onClick={(e)=>handleDevelop(e)}>
        <div className={`nav-bar ${isMenuOpen ? 'open' : ''}`}>
            <div style={{width: "128px",height: "64px", marginLeft:"1em",overflow: "hidden"}}>
                <img alt="Puck Logo" src={Puck} width="128" style={{margin: "-15px 0px 0px -15px"}}></img>
            </div>
            <ul>
                <li><Link to={`/`} className='magenta' >Home</Link></li>
                <li>Add a Puck</li>
                <li>Safe Places</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  );
};

export default NavBar;