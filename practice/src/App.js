import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    message: '',
    servMessage: '',
  }

  componentDidMount() {
    axios.get('http://localhost:5000').then((response)=>{
      this.setState({
        message: response.data.message
      })
    })
  }

  handleInput = (e) => {
    this.setState({
      servMessage: e.target.value
    })
  }

  handleForm= (e)=> {
    e.preventDefault();
    axios.post('http://localhost:5000/post', {
      message: this.state.servMessage
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.message}
        <form onSubmit={this.handleForm}>
          <input placeholder="enter your message" onChange={this.handleInput}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
