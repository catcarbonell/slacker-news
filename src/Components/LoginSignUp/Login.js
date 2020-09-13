import React from "react";
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
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
    const submitValue = (props) => {
      const formDetails = {
        username: props.username,
        password: props.password,
      };
      // console.log(formDetails);
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
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((u) => {
        window.location.href = "/";
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
          <h4 className="font-bold uppercase text-blue-600">Login</h4>
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
                  this.login(props);
                }}
              >
                <BlueButton text="Login" />
              </button>
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
