import React from "react";
import './front.css';

function Front(props){
    return(
        <div className="head1">
        <div className="container">
        <div className="para1">
            <h2>Flight services</h2>
            We provide one of the best flight services in this country. Make yourself comfortable with our comfy flights. We offer both national and inter-national flights, and that too at reasonable prices.
        </div>
        <div className="para2">
            <h2>Train services</h2>
            We provide railway reservation to all the places in India. Be it a popular city or a remote village, we have it all connected. Book your tickets from our website and get lucky by availing great discounts and cashbacks.
        </div>
        <div className="para3">
            <h2>Road travels</h2>
            Here we provide road transports all over the country. Either you want to go for self-driving vehicles or along with a driver, we have got your back. For more offers visit our site. 
        </div>
        </div>
        </div>
    );
}

export default Front;