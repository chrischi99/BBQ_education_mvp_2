import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './login_screen.css'
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Login_page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      result: ''
    }
    this.handleChange_username = this.handleChange_username.bind(this);
    this.handleChange_password = this.handleChange_password.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange_username(event) {
    this.setState({value: event.target.value});
  }

  handleChange_password(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A keyword was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({searchfield: this.state.value});
    var myParams = {
      userMail: "chrischicc99@berkeley.edu",
      password: "Chi"
    }
    console.log(myParams);
    if (myParams != "") {
    axios.post('http://127.0.0.1:5000/loginPage', myParams)
    .then(response => response.data)
    .then((data) => {
      this.setState({ result: data })
      console.log(this.state.result)
      if (!this.state.result) {
        return <span className = "loading_page">Loading...</span>;
      }
     })
  }
  }
  
  
  render(){
    return (
    <div className="Login">
      <form onSubmit = {this.handleSubmit}>
      <label>
          <input type="text" value={this.state.user} onChange={this.handleChange_username} />
          <input type="text" value={this.state.pass} onChange={this.handleChange_password} />
          <input className = "submit_button" type="submit" value="Submit" />
        </label>
      </form>

      <p>{this.state.result}</p>
    </div>
  );
}
}

export default Login_page;
