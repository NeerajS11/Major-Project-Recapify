import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo/PortfolioLogo5.svg';
import navIcon1 from '../assets/img/nav-icons/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icons/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icons/nav-icon7.svg';
import sendIcon from '../assets/img/nav-icons/send.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Youtube Analyzer</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Document Analyzer</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="" target="_blank"><img src={navIcon1} alt="" /></a>
                {/* <a href="#"><img src={navIcon2} alt="" /></a> */}
                <a href="" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
          
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
