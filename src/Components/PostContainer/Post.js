import React from "react";
import fire from "../../config/Fire";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = fire.firestore();

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upvoted: false,
      upvotes: [],
    };
  }

  handleUpvote(props) {
    console.log("CLICKED");
    // Load all the upvotes for this post
    const db = fire.firestore();
    db.collection("upvotes")
      .where("postRef", "==", this.props.id)
      .get()
      .then((querySnapshot) => {
        let upvotes = querySnapshot.docs.map((upvote) => {
          // Now we have all the upvotes for this post
          // We need to check if this user already upvoted it
          if (upvote.ownerId == fire.auth().currentUser.uid) {
            this.setState({ upvoted: true });
          }
        });
        this.setState({ upvotes: upvotes });
      });

    // Check if user already upvoted this post
    if (this.state.upvoted) {
      return;
    }
    // Otherwise, he can upvote the post
    const newUpvote = {
      ownerId: fire.auth().currentUser.uid,
      postRef: props.id,
    };
    db.collection("upvotes")
      .add(newUpvote)
      .then(function () {
        console.log("Successfully upvoted!");
        this.setState({ upvotes: this.state.upvotes, newUpvote });
      })
      .catch(function (error) {
        console.error("Error upvoting: ", error);
      });

    /// To Do
    // 1. Need to update the right post in the DB and give it upvote += 1
    //
    // 2. Need to add onClick to upvote button, WITHOUT it going off 30 times automatically
  }

  render() {
    return (
      <div className="m-auto lg:w-2/3 w-full flex flex-row px-4 py-2 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
        <div className="p-4 flex place-self-center">
          <p className="text-2xl hover:text-blue-400 cursor-pointer">&#9650;</p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row pt-2 items-center">
            <div>
              <a href={this.props.url} target="new">
                <h2 className="text-xl hover:text-blue-400">
                  {this.props.title}
                </h2>
              </a>
            </div>
            <div>
              <p className="text-xs ml-2">
                (
                {
                  <a
                    href={this.props.url}
                    className="hover:text-blue-300"
                    target="new"
                  >
                    {this.props.url}
                  </a>
                }
                )
              </p>
            </div>
          </div>
          {/* User info */}
          <div>
            <div className="text-sm flex flex-row text-gray-500">
              <p className="mr-2">{this.props.owner} </p>
              <p className="mr-2">{this.props.date}</p>
              <p className="mr-2">hide post</p>
              <p className="hover:text-blue-400">
                <Link
                  to={{
                    pathname: "/comments",
                    state: {
                      postId: this.props.id,
                      email: this.props.owner,
                      title: this.props.title,
                      url: this.props.url,
                    },
                  }}
                >
                  {" "}
                  {this.props.comments} comments{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
