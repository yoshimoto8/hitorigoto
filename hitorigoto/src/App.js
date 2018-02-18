import React, { Component } from 'react';
import './App.css';

import HitorigotoContainer from './components/HitorigotoContainer'
import Login from './components/LoginContainer'
import Header from './components/HeaderContainer'
import Modal from 'react-modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  ChangeModalOpen = () => {
    this.setState({modalIsOpen: true})
  }

  ChangeModalClose = () => {
    this.setState({modalIsOpen: false})
  }


  render() {
    Modal.setAppElement('div')
    const customStyles = {
      content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-20%',
        transform             : 'translate(-50%, -50%)'
      }
    }
    return (
      <div className="main">
        <Header ChangeModalOpen={this.ChangeModalOpen} ChangeModalClose={this.ChangeModalClose}/>
        <div className="App">
          <HitorigotoContainer />
          <Modal
           isOpen={this.state.modalIsOpen}
           style={customStyles}
           onRequestClose=''>
           <Login ChangeModalClose={this.ChangeModalClose}/>
          </Modal>
        </div>
      </div>
    )
  }
}

export default App;

// <Modal isOpen={modalIsOpen} style={customStyles}>
// </Modal>
