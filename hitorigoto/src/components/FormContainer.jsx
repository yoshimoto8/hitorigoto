import React from 'react'
import axios from 'axios'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'



class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    debugger
    axios.post('http://localhost:3001//api/v1/hitorigotos',
                {params: {title: this.state.title,
                          text: this.state.text}})
    .then((results) => {
      // this.props.handleAddHitorigoto(results)
    })
  }


  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeText(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <form className="HitorigotoForm" onSubmit={e => this.handleSubmit(e)}>
        <FormGroup bsSize="small">
          <FormControl type="text" placeholder="タイトルを入力してね♡" value={this.state.title} onChange={ (e) => this.onChangeTitle(e) } />
        </FormGroup>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>つぶやきフォーム</ControlLabel>
          <FormControl componentClass="textarea" placeholder="つぶやいてね♡"  onChange={ (e) => this.onChangeText(e) }/>
        </FormGroup>
        <input type="submit"/>
      </form>
    )
  }
}

export default FormContainer
