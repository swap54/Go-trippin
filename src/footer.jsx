import React from "react";
import './footer.css';
import insta from './insta.jpeg'
import twitter from './twitter.jpeg'
import linkedin from './linkedin.jpeg'


function Footer(props){
    return(
        <div className="body">
            <div className="contact">
                <h2>Contact:</h2>
                <ul>
                    <li>Kumar Swapnil</li>
                    <li>Bengaluru-560090</li>
                    <li>email-krswapnil84@gmail.com</li>
                </ul>
            </div>
            <div className="follow">
                <h2>Follow us on:</h2>
                <div className="logo">
                    <img src={insta} alt="insta" />
                    <img src={twitter} alt="linkedin" />
                    <img src={linkedin} alt="twitter" />
                </div>
            </div>
        </div>
    );
}
export default Footer;