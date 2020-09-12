import React from "react";
import fire from "../../config/Fire";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const db = fire.firestore();

function loadComments(id) {
  console.log("MADE IT INTO LOAD COMMENTS FUNCTION");
  console.log(id);
}

const Post = (props) => {
  return (
    <div className="m-auto lg:w-2/3 w-full flex flex-row px-4 py-2 bg-white mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
      <div className="p-4 flex place-self-center">
        <p className="text-2xl hover:text-blue-400 cursor-pointer">&#9650;</p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row pt-2 items-center">
          <div>
            <a href={props.url} target="new">
              <h2 className="text-xl hover:text-blue-400">{props.title}</h2>
            </a>
          </div>
          <div>
            <p className="text-xs ml-2">
              (
              {
                <a
                  href={props.url}
                  className="hover:text-blue-300"
                  target="new"
                >
                  {props.url}
                </a>
              }
              )
            </p>
          </div>
        </div>
        {/* User info */}
        <div>
          <div className="text-sm flex flex-row text-gray-500">
            <p className="mr-2">somedude {/* {props.owner} */}</p>
            <p className="mr-2">8 hours ago {/* {props.time} */}</p>
            <p className="mr-2">hide post</p>
            <p
              onClick={() => {
                console.log("---props.id---");
                console.log(props.id);
                console.log("------------");
                loadComments(props.id);
              }}
              className="hover:text-blue-400"
            >
              <Link
                to={{
                  pathname: "/comments",
                  state: {
                    postId: props.id,
                  },
                }}
              >
                {" "}
                {props.comments} comments{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
