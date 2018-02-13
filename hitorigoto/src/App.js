import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal'

import HitorigotoContainer from './components/HitorigotoContainer'
import CreateBottonContainer from './components/CreateBottonContainer'
import FormContainer from './components/FormContainer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  OpenCreateFrom = () => this.setState(() => (
    {modalIsOpen: true}
  ))

  CloseCreateFrom = () => this.setState(() => (
    {modalIsOpen: false}
  ))

  render() {
    Modal.setAppElement('div')
    const modalIsOpen = this.state.modalIsOpen
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
      <div className="App">
        <CreateBottonContainer OpenCreateFrom={this.OpenCreateFrom}/>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <FormContainer CloseCreateFrom={this.CloseCreateFrom}/>
        </Modal>
        <HitorigotoContainer />
      </div>
    );
  }
}

export default App;
