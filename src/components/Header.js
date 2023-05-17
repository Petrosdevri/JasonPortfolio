import { Clipboard, FileText, Home, User } from 'react-feather';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../img/icons/logo.png';

export default function Header() {
  return (
    <header className='header'>
      <Navbar expand='lg' sticky='top'>
        <Container fluid className='container'>
          <Navbar.Brand><img src={logo} alt='logo' width='65' height='45' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto nav-links' id='nav'>
              <li className='nav-links'><Nav.Link as={Link} className='nav-links' smooth={true} to='home'><Home /> Home</Nav.Link></li>
              <li className='nav-links'><Nav.Link as={Link} className='nav-links' smooth={true} to='about'><User /> About</Nav.Link></li>
              <li className='nav-links'><Nav.Link as={Link} className='nav-links' smooth={true} to='tech-stack'><Clipboard /> Tech Stack</Nav.Link></li>
              <li className='nav-links'><Nav.Link as={Link} className='nav-links' smooth={true} to='projects'><FileText /> Projects</Nav.Link></li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}