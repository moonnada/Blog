import React, { Component } from 'react';
import FormErrors from "../../components2/FormErrors";
import Validate from "../../components2/utility/FormValidation";
import { Auth } from "aws-amplify";
import "./login.css"


class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try{
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      this.props.auth.setAuthStatus(true);
      this.props.auth.setUser(user);
      this.props.history.push("/");  //redirect to welcome once users signup successfully
    }catch(error){
      let err = null;
      !error.message ? err = { "message" : error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      })
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <section className="login">
        <div className="loginTitle">
          <h1>Log in</h1>
          <FormErrors className="error" formerrors={this.state.errors} />

          <form className="loginForm" onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="loginInput" 
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="loginInput" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
                
              </p>
            </div>
          
            <div className="field">
              <p className="control">
                <button className="loginButton">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
