import React from "react";
import { Route, Switch } from "react-router-dom";
import PostContainer from "./PostContainer";
import Login from "./LoginSignUp/Login";
import SignUp from "./LoginSignUp/SignUp";
import NewPost from "./NewPost";
import Comments from "./Comments";
import App from "../App";

const Content = () => {
  return (
    <div className="mx-auto flex flex-col flex-grow bg-gray-100 pb-20 mb-20">
      <Switch>
        <Route exact path="/" component={PostContainer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/newpost" component={NewPost} />
        {/* for comments, we will need to figure out how to route to a specific Post via ID */}
        <Route path="/comments" component={Comments} />
      </Switch>
    </div>
  );
};

export default Content;
