import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import logo from './images/Logo.png';
import user from './images/user.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className="header-container">
          <Navbar.Brand as={Link} to="/" className="logo-container">
            <img src={logo} width="100" height="100" alt="KickIt Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="nav-links">
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/games" className="nav-link-custom">Games</Nav.Link>
              <Nav.Link as={Link} to="/bookings" className="nav-link-custom">Book</Nav.Link>
              <Nav.Link as={Link} to="/signup" className="nav-link-custom active">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/reviews" className="nav-link-custom">Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="user-container">
            <Link to="/signup">
              <img src={user} width="80" height="80" alt="User" className="user-icon" />
            </Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
