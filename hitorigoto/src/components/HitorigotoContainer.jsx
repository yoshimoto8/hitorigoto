import React from 'react'
import axios from 'axios'
import $ from 'jquery';
import {Panel} from 'react-bootstrap'
import FormContainer from './FormContainer'
import update from 'immutability-helper';



class HitorigotoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hitorigotos: [],
      pos: 0,
      data: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/hitorigotos.json')
    .then(response => {
      console.log(response.data.length)
      this.setState({
        hitorigotos: response.data,
        pos: this.state.pos + response.data.length
      })
    })
    .catch(error => console.log(error))

    $.ajax({
			type: 'GET',
			url: 'http://localhost:3001/auth/validate_token',
      dataType: "JSON",
      headers: JSON.parse(sessionStorage.getItem('user'))
		}).done((data) => {
        this.setState({data: data});
      });
  }


  handleAddHitorigoto(hitorigotoResult) {
    // const data= this.state.hitorigotos
    // debugger
    // update(data, {$push: [hitorigotoResult]})
  }

  render() {
    return (
      <div className='hitorigoto-main'>
        <div className='hitorigoto-background'>
          <FormContainer handleAddHitorigoto={this.handleAddHitorigoto} />

            {this.state.hitorigotos.map((data) => {
              return(
                <div className='tile' key={data.id}>
                  <Panel>
                    <Panel.Heading className='title'>{data.title}</Panel.Heading>
                    <Panel.Body className='body'>{data.body}</Panel.Body>
                  </Panel>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}

export default HitorigotoContainer
