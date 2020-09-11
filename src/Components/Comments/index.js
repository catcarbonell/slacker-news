import React, { Component } from "react";
import BlueButton from "../Layout/BlueButton";
import Comment from "./Comment";
import Post from "../PostContainer/Post";
import fire from "../../config/Fire";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Comments extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      owner: "",
      text: "",
      postRef: "",
    };
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
        <Post
          title="Almost half of senior employees confess to slacking off at work"
          url="https://www.hrreview.co.uk/hr-news/almost-half-of-senior-employees-confess-to-slacking-off-at-work/120829"
          shorturl="hrreview.co.uk"
          username="somedude"
          time="8 hours ago"
          comments={420}
        />

        <div className="m-auto w-2/3 my-10 flex flex-col">
          <form className="place-content-center">
            <textarea className="w-1/2 p-6 mb-4 border-2 border-solid border-gray-300">
              lol
            </textarea>
            <div className="w-40 flex">
              <BlueButton text="Add Comment" />
            </div>
          </form>

          {/* Comments associated with Post id  */}
          <Comment
            username="somebody"
            time="5 hours ago"
            comment="once told me"
          />

          <Comment
            username="the world"
            time="5 hours ago"
            comment="was gonna roll me"
          />

          <Comment
            username="I"
            time="5 hours ago"
            comment="ain't the sharpest tool in the shed"
          />
        </div>
      </>
    );
  }
}

// We need to load all comments associated with the specific post

export default Comments;
