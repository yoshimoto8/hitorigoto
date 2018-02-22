import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'



class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  handleSubmit = () => {
    const formData = [this.state.title, this.state.text]
    this.props.CreateHitorigoto(formData)
    this.setState({title: ''})
    this.setState({text: ''})
  }


  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeText(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    if(sessionStorage.getItem('user')){
      return(
          <div>
            <form className="HitorigotoForm">
              <FormGroup bsSize="small">
                <FormControl type="text" placeholder="タイトルを入力してね♡" value={this.state.title} onChange={ (e) => this.onChangeTitle(e) } />
              </FormGroup>

              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>つぶやきフォーム</ControlLabel>
                <FormControl componentClass="textarea" placeholder="つぶやいてね♡"  onChange={ (e) => this.onChangeText(e) }/>
              </FormGroup>
            </form>
            <button onClick={this.handleSubmit} >つぶやく！</button>
          </div>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

export default FormContainer
