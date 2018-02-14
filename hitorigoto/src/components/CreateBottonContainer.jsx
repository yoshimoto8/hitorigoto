import React from 'react'
import {Button} from 'react-bootstrap'

class CreateBottonContainer extends React.Component {
  render() {
    const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    return (
      <div className="well" style={wellStyles}>
       <Button bsStyle="primary" bsSize="large" block onClick={this.props.OpenCreateFrom}>
         つぶやく
       </Button>
     </div>
    )
  }
}

export default CreateBottonContainer
