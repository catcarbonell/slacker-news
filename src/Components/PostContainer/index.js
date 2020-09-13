import React, { Component } from "react";
import Post from "./Post";
import fire from "../../config/Fire";

class PostContainer extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const db = fire.firestore();
    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        let data = querySnapshot.docs.map((doc) => {
          // doc.data()
          let id = doc.id;
          let d = doc.data();
          d.id = id;

          return d;
        });

        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <>
        {/* We can .map() the Firebase DB for content. This Post component will be the base for it. */}
        {this.state.posts.map((post) => (
          <Post
            // owner={fire.auth().currentUser.email}

            title={post.title}
            url={post.url}
            shorturl={post.url}
            id={post.id}
          />
        ))}
      </>
    );
  }
}
export default PostContainer;
