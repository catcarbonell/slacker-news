import React, { Component } from "react";
import Header from "./Components/Layout/Header";
import Content from "./Components/Content";

import fire from "./config/Fire";
import Login from "./Components/LoginSignUp/Login";
import PostContainer from "./Components/PostContainer/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <div>
        {/* TODO: Add rendering logic */}
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
