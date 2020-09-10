import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";
import BlueButton from "../Layout/BlueButton";
import { Component } from "react";
import fire from "../../config/Fire";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.submitValue = this.submitValue.bind(this);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  submitValue(props) {
    console.log("we did it!");
    const formDetails = {
      username: props.username,
      password: props.password,
    };
    console.log(formDetails);
    this.signup(formDetails);
  }

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // this.setUsername(e.target.username);
    // this.setPassword(e.target.password);
  }

  signup(e) {
    let HomeURL = "/";
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
      });
    return <Redirect to={HomeURL} />;
  }

  render() {
    return (
      <div className="m-auto max-w-sm flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
        <form className="flex flex-col mx-auto py-8 px-6">
          <h4 className="font-bold uppercase text-blue-600">Sign Up</h4>
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
            <div className="uppercase w-32 flex items-center font-bold">
              <BlueButton onClick={this.signup} text="Sign Up" />
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
