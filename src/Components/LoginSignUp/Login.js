import React, { useState } from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import BlueButton from "../Layout/BlueButton";
import fire from "../../config/Fire";

// const Login = () => {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const submitValue = () => {
//         const formDetails = {
//             'username' : username,
//             'password' : password
//         }
//         console.log(formDetails);
//     }

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      username: "",
      password: "",
    };
    const submitValue = (props) => {
      const formDetails = {
        username: props.username,
        password: props.password,
      };
      console.log(formDetails);
      this.login(formDetails);
    };
  }

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setUsername(e.target.username);
    // this.setPassword(e.target.password);
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(e.username, e.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(e.username, e.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="m-auto max-w-sm flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
        <form className="flex flex-col mx-auto py-8 px-6">
          <h4 className="font-bold uppercase text-blue-600">Login</h4>
          <div className="flex flex-col mt-4">
            <label name="username" className="uppercase text-sm mb-2 font-bold">
              Username
            </label>
            <input
              className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg"
              type="text"
              placeholder="somedude"
              name="username"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col mt-4">
            <label name="username" className="uppercase text-sm mb-2 font-bold">
              Password
            </label>
            <input
              className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg"
              type="password"
              placeholder="******"
              name="password"
              onChange={(e) =>
                this.setState({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mt-8">
            <div
              onClick={this.submitValue}
              className="uppercase w-20 font-bold"
            >
              <BlueButton text="Login" />
            </div>

            <p className="mx-auto mt-6 cursor-pointer uppercase font-bold text-xs text-blue-500 hover:text-blue-300">
              Forgot Password?
            </p>
            <p className="mx-auto mt-2 text-xs">
              No account? &nbsp;
              <Link to="/signup">
                <span className="cursor-pointer uppercase font-bold text-blue-500 hover:text-blue-300">
                  Sign Up
                </span>
                !
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
