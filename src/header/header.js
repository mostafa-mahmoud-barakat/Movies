import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
const ListMov=useSelector((state)=>state.favoriteMovies)
    return (
        <>
      <Navbar bg="light" expand="lg" fixed="top">
      <Container className='bg-secondary text-white rounded-pill'>
      <Navbar.Brand href="#home" className='text-white'  style={{ fontWeight: 'bold', fontSize:'50px'}}>Egy-Best</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto mx-auto text-white " fixed="top">
        <Link className='text-white' to="/">Home</Link>
        <Link  to="/login" className='text-white mx-3'>login</Link>
        <Link  className='text-white'to="/register">register</Link>
        <Link  to="/movies" className='mx-3 text-white'>movies</Link>
        <Link className='text-white' to="/favorites" >Favorites
        <span className='ms-2 text-white'>{ListMov.length}</span></Link>
      
      </Nav>
       </Navbar.Collapse>
        </Container>
         </Navbar>
        </>
    );
}

export default Header;
