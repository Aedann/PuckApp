import React, {useState } from 'react';
import Device from './Device';
import NavBar from './NavBar'; 
import settingsIcon from '../Ressources/settings.svg';
import pencil from '../Ressources/pencil.svg';
import './DevicePage.css';
import '../App.css';
import "./Device.css";


import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
function DevicePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { Icon, Name, Distance } = useParams();

  let mapClass = "azerza";
  console.log("Before switch: ",mapClass)
  console.log("Name",Name);
  switch(Name){
    case 'Wallet':
        mapClass = "Map4";
        break;
    case 'Cigarettes':
        mapClass = "Map2";
        break;
    case 'Computer':
        mapClass = "Map3";
        break;
  }
  console.log("Map : ",mapClass)

  return (
  <div className='App'>
    {isMenuOpen && <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
      <div>
      {!isMenuOpen &&
        <div className={`settings-button  ${isMenuOpen ? 'open' : ''}`}  onClick={() => {setIsMenuOpen(true); console.log("clicked")}}>
          <img className="settings-icon" src={settingsIcon} alt="Paramètres"/>
        </div>}
      </div>
      <div className="main-content">
        <div className="DeviceInfo">
            <div id={`${Icon}Bigger`}>
              <img src={pencil} className='EditButton'></img>
            </div>
            <div id='infos'>
              <input type="text" value={Name} maxLength={8} id="inputName"></input>
              <textarea id="Description" placeholder="Description..."></textarea>
              <p id="dist2"><strong>Distance : {Distance}m</strong></p>
              <Link to={`/DevicePage/${Icon}/${Name}/${Distance}`}>
                <button id="TrackPuck" >Track this puck !</button>
              </Link>
            </div>
        </div>

        <div className={`${mapClass} Map`}></div>
      </div>
  </div>
  );
}

export default DevicePage;
