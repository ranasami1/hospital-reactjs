import React from "react";
import './footer.css';
import logo from './../../img/heart-rate.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div >
                        <img src={logo} id="img"/>
                        <p id="quate">We strive to provide 
                            the best medical service for you</p>
                        <div className="call">
                            <div>
                            <FontAwesomeIcon id="icon" icon={faPhone}/> </div>
                            <div>
                            <h6>contactUs</h6>
                            <p>(+043)2345678</p>
                         </div>
                         </div>
                         
                    </div>
                    <div >
                        <h5>quick links</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Booking</a></li>
                            <li><a href="#">faqs</a></li>
                            <li><a href="#">our team</a></li>
                            <li><a href="#">services</a></li>
                        </ul>

                    </div>
                    <div >
                    <h5>our services</h5>
                        <ul>
                            <li ><a href="#">Dental Care</a></li>
                            <li ><a href="#">Cardiac clinic</a></li>
                            <li ><a href="#">massege therapy</a></li>
                            <li ><a href="#">cardiology</a></li>
                            <li ><a href="#">precise diagnosis</a></li>
                            <li ><a href="#">abmbulance services</a></li>
                            <li ><a href="#">services</a></li>
                        </ul>
                    </div>
                    <div >
                        <h5>subscribe</h5>
                        <form>
                            <input type="email"/>
                            <button type="submit"> subscribe now</button>
                        </form>
                        <div className="social">
                        <a href="#linkedin"><FontAwesomeIcon  icon={faLinkedin}/></a>
                            <a href="#instagram"><FontAwesomeIcon  icon={faInstagram}/></a>
                            <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            </div>

                    </div>
                </div>
               
                <p id="copy">copyrights@<span>Rana_sami</span></p>
            </div>
        </footer>
    )
};
export default Footer;