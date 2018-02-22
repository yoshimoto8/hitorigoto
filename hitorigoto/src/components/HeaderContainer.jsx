import React from 'react'
import {Navbar, Nav,NavItem} from 'react-bootstrap'
import $ from 'jquery'


class Header extends React.Component {
  handleOpenClick = () => {
    this.props.ChangeModalOpen()
  }

  handleSubmit = () => {
    this.Logout()
  }

  Logout = () => {
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3001/auth/sign_out',
      data: JSON.parse(sessionStorage.user)
    })
    .done(() =>{
      sessionStorage.removeItem('user')
      this.props.ChangeIsLogout()
    })
  }

  render(){
    if(sessionStorage.getItem('user')){
      return(
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={this.handleSubmit}>
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
