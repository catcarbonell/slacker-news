import React from "react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";

const Post = (props) => {
  return (
    <Container>
      <div className="flex flex-row items-center">
        <a href={props.url} target="new">
          <h2 className="text-xl hover:text-blue-400">{props.title}</h2>
        </a>
        <p className="text-sm ml-4">({"props.shorturl"})</p>
      </div>
      {/* User info */}
      <div className="text-sm flex flex-row justify-evenly w-1/3">
        <p>{props.owner} |</p>
        <p>{"props.time"} |</p>
        <p>hide |</p>
        <p className="hover:text-blue-400">
          <Link to="/comments">{"props.comments"} comments</Link>
        </p>
      </div>
    </Container>
  );
};

export default Post;
