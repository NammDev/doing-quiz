import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Hỏi Dân IT</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#home'>Users</Nav.Link>
            <Nav.Link href='#home'>Admin</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title='Settings'>
              <NavDropdown.Item href='#action/3.1'>Log in</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Log out</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
