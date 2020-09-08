import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostContainer from './PostContainer';
import Login from './LoginSignUp/Login';
import SignUp from './LoginSignUp/SignUp';
import NewPost from './NewPost';

const Content = () => {
    return(
      <div className="m-auto flex flex-col bg-gray-100 mb-20">
        <Switch>
          <Route exact path="/" component={PostContainer} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/newpost" component={NewPost} />
          {/* Comments */}
        </Switch>  
      </div>
    )
}

export default Content;