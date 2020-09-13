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
        let data = querySnapshot.docs.map((doc) => {
          // doc.data()
          let id = doc.id;
          let d = doc.data();
          d.id = id;

          console.log("------d=======");
          console.log(d.title);

          return d;
        });
        //const docIds = querySnapshot.docs.map((doc) => doc.id);

        this.setState({ posts: data });
        console.log("THIS.STATE.POST");
        console.log(this.state.posts[0]);
      });
  }

  render() {
    return (
      <>
        {/* We can .map() the Firebase DB for content. This Post component will be the base for it. */}
        {this.state.posts.map((post) => (
          <Post
            owner={fire.auth().currentUser.email}
            title={post.title}
            url={post.url}
            shorturl={post.url}
            id={post.id}
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
