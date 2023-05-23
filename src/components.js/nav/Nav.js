import './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './../../img/heart-rate.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbars = () => {
  return (
    <Navbar Fixed='top' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to ="/home" style={{
            textDecoration : "none"
          }}>
          <img id="logo" src={Logo} alt="logo" />
          <p>HealthCare</p></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to ="/home" id="Link" href="#home">Home</Link>

            <NavDropdown title="pages" id="basic-nav-dropdown"><NavDropdown.Item href="#action/3.1">about us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                our team
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Error 404</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a href='#login'>login/ register</a>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="services" id="basic-nav-dropdown"><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link to ="/contact" id="Link" href="#contact">contact us</Link>
            <Link id="Link" href="#link">
            <FontAwesomeIcon icon={faSearch}/>
            </Link>
            <Link id="Link" href="#link">
            <FontAwesomeIcon icon={faPhone}/>  (+043)2345678</Link>
            <Link href="#link">
              <button>CONTACT US</button>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;