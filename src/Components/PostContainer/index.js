import React, { Component } from "react";
import Post from "./Post";
import fire from "../../config/Fire";
import { render } from "@testing-library/react";

class PostContainer extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const db = fire.firestore();
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        this.setState({ posts: data });
      });
  }
  render() {
    console.log(this.state.posts);
    return (
      <>
        {/* We can .map() the Firebase DB for content. This Post component will be the base for it. */}
        {this.state.posts.map((post) => (
          <Post
            title={post.title}
            url={post.url}
            shorturl={post.url}
            //   username="somedude"
            //   time="8 hours ago"
            //   comments={420}
          />
        ))}
      </>
    );
  }
}
export default PostContainer;
