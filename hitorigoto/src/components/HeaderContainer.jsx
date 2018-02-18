import React from 'react'
import {Navbar, Nav,NavItem} from 'react-bootstrap'


class Header extends React.Component {

  handleOpenClick = () => {
    this.props.ChangeModalOpen()
  }

  render(){
    if(sessionStorage.getItem('user')){
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
              <NavItem eventKey={1}>
                ログアウト
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    } else{
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
              <NavItem eventKey={1} onClick={this.handleOpenClick}>
                ログイン
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )

    }
  }
}

export default Header
