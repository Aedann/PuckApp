import React, {useState } from 'react';
import Device from './Components/Device.js';
import NavBar from './Components/NavBar.js'; 
import devicesData from './Ressources/DevicesData';
import logo from './logo.svg';
import settingsIcon from './Ressources/settings.svg';
import './App.css';
import Map1 from "./Ressources/Map1.png";




function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="mapDiv"></div>
        <div className="device-list">
          <div className="deviceDiv">
          {devicesData.map((device, index) => (
            <Device
              key={index}
              Icon={device.Icon}
              Name={device.Name}
              Distance={device.Distance}
            />
          ))}
          </div>
        </div>
      </div>
  </div>
);
}

export default App;
