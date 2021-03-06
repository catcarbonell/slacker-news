import React from "react";
import BlueButton from "../Components/Layout/BlueButton";
import { Component } from "react";
import fire from "../config/Fire";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const createHistory = require("history").createBrowserHistory;

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.state = {
      owner: "",
      title: "",
      url: "",
      id: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSumbit(e) {
    if (fire.auth().currentUser == null) {
      window.location.href = "/login";
    } else {
      this.setState({ owner: fire.auth().currentUser.uid });

      // Extract items from state to create new post to save in db
      const addToDB = () => {
        var newPost = {
          owner: fire.auth().currentUser.uid,
          email: fire.auth().currentUser.email,
          title: this.state.title,
          url: this.state.url,
          id: "",
          date: new Date(),
        };

        var db = fire.firestore();

        db.collection("posts")
          .add(newPost)
          .then(function () {
            console.log("Document successfully written!");
            let history = createHistory();
            history.push("/");
            let pathUrl = window.location.href;
            window.location.href = pathUrl;
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      };

      // Checks if a post already has the same title.
      var db = fire.firestore();

      db.collection("posts")
        .where("title", "==", this.state.title)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          // console.log(data);
          if (data[0] == undefined) {
            addToDB();
          } else {
            alert("Post Exists Try Again");
          }
        });
    }
  }

  render() {
    return (
      <div className="m-auto w-1/3 flex flex-col p-6 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
        <form className="w-full flex flex-col mx-auto py-8 px-6">
          <h4 className="font-bold uppercase text-blue-600">
            Create a new post
          </h4>
          <div className="flex flex-col mt-4">
            <label name="username" className="uppercase text-sm mb-2 font-bold">
              Post Title
            </label>
            <input
              onChange={this.handleChange}
              className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg"
              type="text"
              placeholder="Meep."
              name="title"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label name="url" className="uppercase text-sm mb-2 font-bold">
              URL
            </label>
            <input
              onChange={this.handleChange}
              className="border-2 border-solid border-gray-400 px-4 py-2 rounded-lg"
              type="text"
              placeholder="https://site.com"
              name="url"
            />
          </div>
          <div className="mt-8">
            <div
              onClick={this.handleSumbit}
              className="uppercase w-24 font-bold"
            >
              <BlueButton text="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPost;
