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

          console.log("------data=======");
          console.log(d);

          return d;
        });
        const docIds = querySnapshot.docs.map((doc) => doc.id);

        //var id = doc.data().uid;

        // need to get the correct id out of docids
        //
        //
        //
        //
        //

        this.setState({ posts: data });
      });
  }

  render() {
    return (
      <>
        {/* We can .map() the Firebase DB for content. This Post component will be the base for it. */}
        {this.state.posts.map((post) => (
          <Post
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
