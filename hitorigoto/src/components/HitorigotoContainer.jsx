import React from 'react'
import axios from 'axios'


class HitorigotoContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hitorigotos: [],
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/v1/hitorigotos.json')
    .then(response => {
      this.setState({hitorigotos: response.data})
    })
    .catch(error => console.log(error))
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
      <div>
        {this.state.hitorigotos.map((data) => {
          return(
            <div className='tile' key={data.id}>
              <h4 className='title'>{data.title}</h4>
              <p className='body'>{data.body}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HitorigotoContainer
