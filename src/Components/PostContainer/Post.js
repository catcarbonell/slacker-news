import React from "react";
import { Link } from "react-router-dom";



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
                <h2 className="text-xl hover:text-blue-400">
                  {props.title}
                </h2>
              </a>
            </div>
            <div>
              <p className="text-xs ml-2">
                ({
                  <a
                    href={props.url}
                    className="hover:text-blue-300"
                    target="new">
                    {props.url}
                  </a>
                })
              </p>
            </div>
          </div>
          {/* User info */}
          <div>
            <div className="text-sm flex flex-row text-gray-500">
              <p className="mr-2">{props.owner} </p>
              <p className="mr-2">{props.date}</p>
              <p className="mr-2">hide post</p>
              {/* <p className="hover:text-blue-400">
                <Link
                  to={{
                    pathname: "/comments",
                    state: {
                      postId: props.id,
                      email: props.owner,
                      title: props.title,
                      url: props.url,
                    },
                  }}
                >
                  {" "}
                  {this.props.comments} comments{" "}
                </Link> */}
              
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Post;
