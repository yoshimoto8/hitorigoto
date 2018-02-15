import React from 'react'
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleLogin = () => {
    console.log('ログインスタート')
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .done((response, status, jqXHR) => {
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid
        })
      )
      console.log('successlog')
    })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  render() {
    if(sessionStorage.getItem('user')){
      return(
        <div></div>
      )
    } else {
      return(
        <div>
          <input type="text" value={this.state.title} onChange={ (e) => this.onChangeEmail(e) } />
          <input value={this.state.text} onChange={ (e) => this.onChangePassword(e) }/>
          <button onClick={this.handleLogin}>ログイン</button>
        </div>
      )
    }
  }
}

export default Login
