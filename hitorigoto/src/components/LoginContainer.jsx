import React from 'react'
import axios from 'axios'

class Login extends Component {

  handleLogin = () => {
    axios.get('')
  }

  render() {
    return(
      <div>
        <input type="text" onchange={this.handleLogin}/>
      </div>
    )
  }
}
