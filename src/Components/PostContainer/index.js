import React, { Component } from "react";
import Post from "./Post";
import fire from "../../config/Fire";
import { render } from "@testing-library/react";

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  posts = [];

  componentDidMount() {
    const db = fire.firestore();
    {
      db.collection("posts")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((post) => {
            console.log(`${post.id} => ${post.data()}`);
            this.posts.push();
          });
        });
    }
  }

  list = this.posts.forEach((post) => (
    <li key={post.owner}>
      <Post owner={post.owner} title={post.title} url={post.url} />
    </li>
  ));

  render() {
    return <ul> {this.list} </ul>;
  }
}

export default PostContainer;
