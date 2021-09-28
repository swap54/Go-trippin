import React from "react";
import './first.css'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';

function First(props){
    return(
        <div className="head">
            <h1>Go-Trippin!!</h1>
                <div className="icons">
                        <div className="flight">
                        <div className="wings">
                        </div>
                        <div className="fins"></div>
                        </div>
                    <div className="train">
                        <div className="ab"></div>
                        <div className="bc"></div>
                    </div>
                    <div className="car">
                        <div className="bonet"></div>
                        <div className="whl1"></div>
                        <div className="whl2"></div>
                    </div>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" >
                            <div className="choose">
                            <Link className="l" to="Flight">Flights</Link>
                            <Link className="l">Train-travel</Link>
                            <Link className="l">Road-trip</Link>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
        </div>
    )
}

export default First;