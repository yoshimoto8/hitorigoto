import React from 'react'
import $ from 'jquery'
import {Panel} from 'react-bootstrap'

class HitorigotoContent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }

  handleSubmitFavorite = () => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//api/v1/favorites',
      data: {hitorigoto_id: this.state.data.id},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log(results)
    })
  }

  handleSubmitUnFavorite = () => {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001//api/v1/favorites/${this.state.data.id}`,
      data: {id: this.state.data.id },
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log(results)
    })
  }

  render() {
    const data = this.state.data
    return(
      <div className='tile'>
        <Panel>
          <Panel.Heading className='title'>{data.title}</Panel.Heading>
          <Panel.Body className='body'>{data.body}</Panel.Body>
          <button onClick={this.handleSubmitFavorite} >fav</button>
          <span><button onClick={this.handleSubmitUnFavorite}>unfav</button></span>
        </Panel>
      </div>
    )
  }
}

export default HitorigotoContent
