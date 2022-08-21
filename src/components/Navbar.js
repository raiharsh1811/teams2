import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import yo from './assets/yo.png'
import yooo from './assets/yooo.png'
import { useState,useEffect} from 'react';

function BasicExample() {
  const [activeLink,setActiveLink]=useState('coeteam');
  const [scrolled,setScrolled]=useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#coreteam" className={activeLink === 'coreteam' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('coreteam')}>Core team</Nav.Link>
            <Nav.Link href="#marketing" className={activeLink === 'marketing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('marketing')}>Marketing</Nav.Link>
            <Nav.Link href="#publicrealtions"className={activeLink === 'publicrealtions' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('publicrealtions')}>Public Relations</Nav.Link>
            <Nav.Link href="#events" className={activeLink === 'events' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('events')}>Events</Nav.Link>
            <Nav.Link href="#logistics" className={activeLink === 'logistics' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('logistics')}>Logistics and operations</Nav.Link>
            <Nav.Link href="#tech"className={activeLink === 'tech' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tech')}>Technical</Nav.Link>
            <Nav.Link href="#design"className={activeLink === 'design' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('design')}>Design team</Nav.Link>
            <Nav.Link href="#content"className={activeLink === 'content' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('content')}>Content and Creative</Nav.Link>
            <Nav.Link href="#cult"className={activeLink === 'cult' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cult')}>CultCouncil </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;