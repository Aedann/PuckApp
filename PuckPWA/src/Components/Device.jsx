import {React} from 'react';
import '../App.css';
import "./Device.css";
import { Link } from 'react-router-dom';

function Device({Icon,Name,Distance}) {

  return (
    <div  >
        <Link to={`/DevicePage/${Icon}/${Name}/${Distance}`} className="Device">
            <div id={Icon}></div>
            <h3>{Name}</h3>
            <p id="dist"><strong>{Distance}m</strong></p>
        </Link>
    </div>
  );
}

export default Device;
