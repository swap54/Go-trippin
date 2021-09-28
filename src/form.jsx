import React from "react";
import './form.css'

function Form(){
    return(
        <div className="cnt">
                <div className="form">
                    <input type="text" name="name" id="nm" placeholder="Enter your name"/>
                    <input type="number" name="age" id="age" placeholder="Enter your age" />
                    <input type="text" name="email" id="email" placeholder="Enter your email" />
                    <input type="date" name="date" id="date" placeholder="Enter the travel date"/>
                    <button id="btn">Search</button>
                </div>
        </div>
    )
}

export default Form;