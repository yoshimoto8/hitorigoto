import React from 'react'
import axios from 'axios'
import $ from 'jquery';
import {Panel} from 'react-bootstrap'

class HitorigotoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hitorigotos: [],
      data: []
    }
  }


  componentWillMount() {
    axios.get('http://localhost:3001/api/v1/hitorigotos.json')
    .then(response => {
      console.log('データの取得')
      this.setState({hitorigotos: response.data})
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


  componentWillReceiveProps() {
    axios.get('http://localhost:3001/api/v1/hitorigotos.json')
    .then(response => {
      this.setState({hitorigotos: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='hitorigoto-main'>
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
    )
  }
}

export default HitorigotoContainer
