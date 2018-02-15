import React, { Component } from 'react';
import './App.css';

import HitorigotoContainer from './components/HitorigotoContainer'
import Login from './components/LoginContainer'
import Header from './components/HeaderContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="main">
        <Header/>
        <Login OpenCreateFrom={this.OpenCreateFrom}/>
        <div className="App">
          <HitorigotoContainer />
        </div>
      </div>
    );
  }
}

export default App;

// <Modal isOpen={modalIsOpen} style={customStyles}>
// </Modal>
