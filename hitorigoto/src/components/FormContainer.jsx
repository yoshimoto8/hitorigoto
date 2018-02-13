import React from 'react'
import axios from 'axios'



class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      text: ''
    }
  }

  handleSubmit = () => {
    axios.post('http://localhost:3001//api/v1/hitorigotos',
                {params: {title: this.state.title,
                          text: this.state.text}})
    .then((results) => {
      this.props.CloseCreateFrom()
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
      <div>
        <input type="text" value={this.state.title} onChange={ (e) => this.onChangeTitle(e) } />
        <textarea value={this.state.text} onChange={ (e) => this.onChangeText(e) }/>
        <button onClick={this.handleSubmit}> つぶやく</button>
      </div>
    )
  }
}

export default FormContainer
