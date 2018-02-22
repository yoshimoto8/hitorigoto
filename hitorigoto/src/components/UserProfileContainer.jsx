import React from 'react'

class UserProfileContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    if(sessionStorage.getItem('user')){
      return(
        <div className='MyProfile'>
          <p>{this.props.email}</p>
          <p>{this.props.name}</p>
        </div>
      )
    }else{
      return(
        <div>
        </div>
      )
    }
  }
}

export default UserProfileContainer
