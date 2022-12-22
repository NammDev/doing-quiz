import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link className='navbar-brand' to='/'>
          Hỏi Dân IT
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/profile'>
              Users
            </Link>
            <Link className='nav-link' to='/admin'>
              Admin
            </Link>
          </Nav>
          <Nav>
            <NavDropdown title='Settings'>
              <Link to='/' className='dropdown-item'>
                Log in
              </Link>
              <Link to='/' className='dropdown-item'>
                Log out
              </Link>
              <Link to='/' className='dropdown-item'>
                Profile
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
