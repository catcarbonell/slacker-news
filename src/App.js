import React, { Component } from "react";
import Header from "./Components/Layout/Header";
import Content from "./Components/Content";

import fire from "./config/Fire";

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
