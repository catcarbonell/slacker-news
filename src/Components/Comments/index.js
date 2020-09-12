import React, { Component } from "react";
import BlueButton from "../Layout/BlueButton";
import Comment from "./Comment";
import Post from "../PostContainer/Post";
import fire from "../../config/Fire";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

let comments = [];

class Comments extends Component {
  constructor(props) {
    super(props);

    let propsObj = props;
    console.log("=-=-=-=-=-=-PROPSOBJ-=-=-=-=-=-=");
    console.log(props.location.state);

    let postId = props.location.state.postId;
    console.log("THIS IS THE POST ID");
    console.log(props.location.state.postId);
    console.log("THIS IS props.location.state");
    console.log(props.location.state);
    props = props.location.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      owner: "",
      text: "",
      postRef: "",
      comments: "",
      postTitle: this.props.location.state.title,
      postUrl: this.props.location.state.url,
    };

    // New we need to load all the comments
    console.log("postId: ");
    console.log(postId);
    const db = fire.firestore();
    db.collection("comments")
      .where("postRef", "==", postId) // NEED TO PUT POST ID HERE!!
      .get()
      .then((querySnapshot) => {
        let comments = querySnapshot.docs.map((doc) => doc.data());

        this.setState({ comments: comments });
      });
    console.log("Comments");
    console.log(comments);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSumbit(e) {
    console.log("-------Owner------");
    console.log(fire.auth().currentUser.uid);
    if (fire.auth().currentUser)
      this.setState({ owner: fire.auth().currentUser.uid });

    // Extract items from state to create new post to save in db
    const newComment = {
      owner: fire.auth().currentUser.uid,
      text: this.state.text,
      postRef: db.doc(
        "posts/" + "" /* need to reference the relevant post here! */
      ).ref,
    };

    var db = fire.firestore();

    db.collection("comments")
      .add(newComment)
      .then(function () {
        console.log("Comment successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing comment: ", error);
      });

    this.setState({
      owner: "",
      text: "",
      postRef: "",
    });
    //window.location.href = "/";
  }

  render() {
    return (
      <>
        {/* This is the post that the user clicked on */}
        <Post
          title={this.state.postTitle}
          url={this.state.postUrl}
          shorturl="hrreview.co.uk"
          username="somedude"
          time="8 hours ago"
          comments={420}
        />

        {/* This div allows users to post new comments */}
        <div
          onChange={this.handleChange}
          className="m-auto w-2/3 my-10 flex flex-col"
        >
          <form className="place-content-center">
            <textarea className="w-1/2 p-6 mb-4 border-2 border-solid border-gray-300">
              lol
            </textarea>
            <div className="w-40 flex">
              <BlueButton text="Add Comment" />
            </div>
          </form>
        </div>

        {/* Comments associated with Post id will go here */}
      </>
    );
  }
}

// We need to load all comments associated with the specific post

export default Comments;
