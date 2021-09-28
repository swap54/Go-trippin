import React from "react";
import './navigation.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
function Navigation(){
    return(
        <div className="nav">
            <div className="navin">
           <Link className="lnk" to="/Flight">Flights</Link>
            <Link className="lnk" to="/Trains">Trains</Link>
            <Link className="lnk" to="Cars">Cars</Link>
            </div>
        </div>
    )
}

export default Navigation