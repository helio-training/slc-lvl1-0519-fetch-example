import React from 'react'

class Toggle extends React.Component {
  state = { 
      isToggleOn: true,
      name: "Go Fetch"
     };

  handleClick = () => {
      fetch(`http://localhost:4000/${this.props.index}`)
      .then(data => data.json())
      .then(result => 
        this.setState({name: result.name},
          console.log('SetState', result)
        )
      )
  };

  render() {
    return (
      <div>
        {this.state.name} ==>
        <button onClick={this.handleClick}>
          Fetch
        </button>
      </div>
    );
  }
}

export default Toggle