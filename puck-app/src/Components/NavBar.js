import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

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
            <h1 id='Title'>Puck</h1>
            <ul>
                <li><Link to={`/`} className="white" >Home</Link></li>
                <li>Add a Puck</li>
                <li>Safe Places</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  );
};

export default NavBar;