
import React, { Component } from 'react';
import FormErrors from "../../components2/FormErrors";
import Validate from "../../components2/utility/FormValidation";
import { Auth } from "aws-amplify";
import "./register.css";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

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
    const { username, email, password } = this.state;
    try{
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      console.log(signUpResponse);
      this.props.history.push("/welcome");  //redirect to welcome once users signup successfully
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
  }

  render() {
    return (
      <section className="register">
        <div className="registerTitle">
          <h1 >Register</h1>
          <FormErrors  className="error" formerrors={this.state.errors} />

          <form className="registerForm" onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="registerInput" 
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input 
                  className="registerInput" 
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
                
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="registerInput" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
               
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input 
                  className="registerInput" 
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm password"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
                
              </p>
            </div>
            
            <div className="field">
              <p className="control">
                <button className="registerButton">
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SignUp;

// import { Link } from "react-router-dom"
// import { useState } from "react";
// import "./register.css"
// import axios from "axios";

// export default function Register() {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(false);
//         try{
//             const res = await axios.post("/auth/register", {
//             username, email, password,                    
//         });
//         res.data && window.location.replace("/login");
//         } catch(err){
//             setError(true);
//         }
//     };

//     return (
//         <div className="register">
//             <span className="registerTitle">Register</span>
//             <form className="registerForm" onSubmit={handleSubmit}>
//                 <label>Username</label>
//                 <input className="registerInput" type="text" placeholder="Enter your username..." onChange={e => setUsername(e.target.value)}/>
//                 <label>Email</label>
//                 <input className="registerInput" type="text" placeholder="Enter your email..." onChange={e => setEmail(e.target.value)}/>
//                 <label>Password</label>
//                 <input className="registerInput" type="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)}/>
//                 <button className="registerButton" type="submit">Register</button>
//             </form>
//             <button className="registerLoginButton">
//                 <Link className="link" to="/login">Login</Link>
//             </button>
//            {error &&  <span style = {{color: "red", marginTop: "10px" }} >Something went wrong</span>}
//         </div>
//     )
// }
