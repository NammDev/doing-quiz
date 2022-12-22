import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Link className='navbar-brand' to='/'>
            Hỏi Dân IT
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse>
            <Nav className='me-auto'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
              <NavLink className='nav-link' to='/profile'>
                Users
              </NavLink>
              <NavLink className='nav-link' to='/admin'>
                Admin
              </NavLink>
            </Nav>
            <Nav>
              <NavDropdown title='Settings'>
                <Link to='/hehe' className='dropdown-item'>
                  Log in
                </Link>
                <Link to='/hihi' className='dropdown-item'>
                  Log out
                </Link>
                <Link to='/haha' className='dropdown-item'>
                  Profile
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
