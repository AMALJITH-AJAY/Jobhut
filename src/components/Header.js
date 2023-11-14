import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {

  const allusers=useSelector((state)=>state.app.users)
  return (
    <div>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Link to={"/"} style={{textDecoration:"none"}}>Create Post</Link>
            <Link to={"/read"} style={{textDecoration:"none"}}>All Post
            ({allusers.length})
            </Link>
            
          </Nav>
          <input className='form-control me-2 w-50' type="search" placeholder='search' aria-label='search'/>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}

export default Header