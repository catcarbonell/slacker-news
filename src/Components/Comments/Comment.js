import React from "react";
import Container from "../Layout/Container";

const Comment = (props) => {
  return (
    <Container>
      <div className="text-xs">
        {props.email} - {props.date}
      </div>
      <div>{props.text}</div>
    </Container>
  );
};

export default Comment;
