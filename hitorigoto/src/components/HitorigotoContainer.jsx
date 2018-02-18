import React from 'react'
import axios from 'axios'
import $ from 'jquery';
import {Panel} from 'react-bootstrap'
import FormContainer from './FormContainer'
import update from 'react-addons-update';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

import Alert from 'react-s-alert';


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
    axios.get('http://localhost:3001/api/v1/hitorigotos')
    .then(response => {
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

  CreateHitorigoto = (formData) => {
    axios.post('http://localhost:3001//api/v1/hitorigotos',
                {params: {title: formData[0],
                          text: formData[1]}})
    .then((results) => {
      if(typeof results.data.body === 'string' && typeof results.data.title === 'string'){
        const newData = update(this.state.hitorigotos, {$push:[results.data]})
        this.setState({hitorigotos: newData})
      } else{
        console.log('エラー')
        this.errorShow()
      }
    })
  }

  errorShow() {
        Alert.warning('文字を入力してください', {
            position: 'top',
        });
    }


  render() {

    return (
      <div className='hitorigoto-main'>
        <Alert stack={{limit: 2}} timeout={3000}/>
        <div className='hitorigoto-background'>
          <FormContainer CreateHitorigoto={this.CreateHitorigoto} />
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
