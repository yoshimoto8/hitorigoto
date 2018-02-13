import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CreateBottonContainer extends React.Component {
  render() {

    return (
       <MuiThemeProvider>
        <RaisedButton
          label="独り言をつぶやく"
          fullWidth={true}
          onClick={this.props.OpenCreateFrom} />
      </MuiThemeProvider>
    )
  }
}

export default CreateBottonContainer
