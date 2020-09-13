import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import BlueButton from "../Layout/BlueButton";
import { Component } from "react";
import fire from "../../config/Fire";
import { Switch, Route } from "react-router-dom";
import App from "../../App";

const createHistory = require("history").createBrowserHistory;

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.submitValue = this.submitValue.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  submitValue(props) {
    const formDetails = {
      username: props.username,
      password: props.password,
    };

    this.signup(formDetails);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
        let history = createHistory();
        history.push("/");
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
      })
      .catch((error) => {
        // console.log(error);
        // console.log(error.message);
        this.setState({ errorMessage: error.message });
      });
  }

  render() {
    return (
      <div className="m-auto max-w-lg px-16 py-8 flex flex-col bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
        <form className="flex flex-col">
          <h4 className="font-bold uppercase text-blue-600">Sign Up</h4>
          <div className="flex flex-col mt-4">
            <label name="username" className="uppercase text-sm mb-2 font-bold">
              Email
            </label>
            <input
              className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg"
              type="text"
              placeholder="somedude"
              name="username"
              onChange={(e) => this.setState({ username: e.target.value })}
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
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="mt-8">
            <div className="uppercase flex flex-col font-bold w-48">
              {this.state.errorMessage ? (
                <p className="text-red-500 text-sm mb-6">
                  {this.state.errorMessage}
                </p>
              ) : (
                <p></p>
              )}
              <button
                className="flex items-center"
                onClick={(props) => {
                  // console.log("Button was pressed");
                  this.signup(props);
                }}
              >
                <BlueButton text="Sign Up" />
              </button>
            </div>
            <p className="mx-auto mt-6 text-xs">
              Got an account? &nbsp;
              <Link to="/login">
                <span className="cursor-pointer uppercase font-bold text-blue-500 hover:text-blue-300">
                  Login
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

export default SignUp;
