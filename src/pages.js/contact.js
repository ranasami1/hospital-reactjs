import './contact.css';
import hospi from "./../img/hospitaal.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
 const Contact = ()=>{
    return(
        <div className='container'>
        <div className='contactus'>
            <div>
                <img src={hospi} alt="hospi"/>

            </div>
            <div>
                <h2>ContactUs</h2>
                <div className='main'>
                    <form>
                    <input type='text' placeholder='full name'/>
                    <input type='email'placeholder="E-mail"/>
                    <input type='text'placeholder ="Message"/>
                    </form>
                    <div>
                    <div>
                    <h4>Contact</h4>
                    <p>ranasami237@gmail.com</p>
                    </div>
                    <div className="social">
                        <a href="#linkedin"><FontAwesomeIcon  icon={faLinkedin}/></a>
                            <a href="#instagram"><FontAwesomeIcon  icon={faInstagram}/></a>
                            <a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            </div>
                </div>
                </div>
               
            </div>
        
        </div>
    </div>)
 }
 export default Contact;