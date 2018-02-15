import React from 'react'
import {Navbar, Nav,NavItem,NavDropdown,MenuItem} from 'react-bootstrap'


class Header extends React.Component {
  render(){
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              ログイン
            </NavItem>
            <NavItem eventKey={2} href="#">
              ログアウト
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
