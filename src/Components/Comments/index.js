import React, { Component } from "react";
import BlueButton from "../Layout/BlueButton";
import Comment from "./Comment";
import Post from "../PostContainer/Post";
import fire from "../../config/Fire";
import { Redirect, withRouter } from "react-router-dom";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

class Comments extends Component {
  //state = {
  //comments: [],
  //};
  comments = [];
  //state = {
  //comms: [],
  //};
  constructor(props) {
    super(props);

    let propsObj = props;
    console.log("=-=-=-=-=-=-PROPSOBJ-=-=-=-=-=-=");
    console.log(props.location.state);

    this.postId = props.location.state.postId;
    console.log("THIS IS THE POST ID");
    console.log(props.location.state.postId);
    console.log("THIS IS props.location.state");
    console.log(props.location.state);
    props = props.location.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      owner: this.props.location.state.owner,
      text: "",
      postRef: "",
      comments: [],
      postTitle: this.props.location.state.title,
      postUrl: this.props.location.state.url,
    };
  }

  componentDidMount() {
    // New we need to load all the comments
    const db = fire.firestore();
    db.collection("comments")
      .where("postRef", "==", this.postId) // NEED TO PUT POST ID HERE!!
      .get()
      .then((querySnapshot) => {
        let coms = querySnapshot.docs.map((doc) => {
          // doc.data()

          let d = doc.data();

          console.log("------d=======");
          console.log(d);
          this.comments.concat(d);
          return d;
          //this.setState({ comments: state.comments.concat(d) });
        });
        this.setState({ comments: coms });
        console.log("Comments");
        console.log(this.state.comments);
        //const docIds = querySnapshot.docs.map((doc) => doc.id);
      });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSumbit(e) {
    console.log("-------Owner------");
    console.log(fire.auth().currentUser.uid);

    console.log("+++++++This is the comment text+++++++");
    console.log(this.state.text);

    //if (fire.auth().currentUser)
    //this.setState({ owner: fire.auth().currentUser.uid });

    // Extract items from state to create new post to save in db
    const newComment = {
      owner: fire.auth().currentUser.uid,
      email: fire.auth().currentUser.email,
      text: this.state.text,
      postRef: this.props.location.state.postId,
    };

    console.log("NEW COMMENT");
    console.log(newComment);

    var db = fire.firestore();

    db.collection("comments")
      .add(newComment)
      .then(function () {
        console.log("Comment successfully written!");
        //return <Redirect to="/comments" />;
      })
      .catch(function (error) {
        console.error("Error writing comment: ", error);
      });

    this.setState({ state: this.state });
    this.setState({
      text: "",
    });
    //this.props.history.push("/comments");
    //window.location.href = "/comments";
    //this.forceUpdate();
    //return <Redirect to="/comments" />;
    //ReactDOM.unmountComponentAtNode()
  }

  render() {
    return (
      <>
        {/* This is the post that the user clicked on */}
        <Post
          title={this.state.postTitle}
          url={this.state.postUrl}
          shorturl="hrreview.co.uk"
          owner={this.state.email}
          comments={this.state.comments.length} // add length of comments array
        />

        {/* This div allows users to post new comments */}
        <div className="m-auto w-2/3 my-10 flex flex-col">
          <form className="place-content-center">
            <textarea
              onChange={this.handleChange}
              className="w-1/2 p-6 mb-4 border-2 border-solid border-gray-300"
            ></textarea>
            <div onClick={this.handleSumbit} className="w-40 flex">
              <BlueButton text="Add Comment" />
            </div>
          </form>
        </div>

        {/* Comments associated with Post id will go here */}
        {this.state.comments.map((com) => (
          <Comment text={com.text} email={com.email} />
        ))}
      </>
    );
  }
}

export default Comments;
