import React from 'react'
import axios from 'axios'
import $ from 'jquery';
import FormContainer from './FormContainer'
import update from 'react-addons-update';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import UserProfileContainer from './UserProfileContainer'
import HitorigotoContent from './HitorigotoContent'
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
    $.ajax({
			type: 'GET',
			url: 'http://localhost:3001/auth/validate_token',
      dataType: "JSON",
      headers: JSON.parse(sessionStorage.getItem('user'))
		}).done((data) => {
        this.setState({data: data.data});
      });

      axios.get('http://localhost:3001/api/v1/hitorigotos')
      .then(response => {
        this.setState({
          hitorigotos: response.data,
          pos: this.state.pos + response.data.length
        })
      })
      .catch(error => console.log(error))
    }

  CreateHitorigoto = (formData) => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//api/v1/hitorigotos',
      data: {params: {title: formData[0], text: formData[1]}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
      if(typeof results.body === 'string' && typeof results.title === 'string'){
        const newData = update(this.state.hitorigotos, {$push:[results]})
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
    const email = this.state.data.email
    const name = this.state.data.name
    return (
      <div className='hitorigoto-main'>
        <UserProfileContainer email={email} name={name} />
        <Alert stack={{limit: 2}} timeout={3000}/>
        <div className='hitorigoto-background'>
          <FormContainer CreateHitorigoto={this.CreateHitorigoto} />
            {this.state.hitorigotos.map((data) => {
              return(
                <HitorigotoContent data={data} key={data.id}/>
              )
            })}
        </div>
      </div>
    )
  }
}

export default HitorigotoContainer
