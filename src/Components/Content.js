import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostContainer from './PostContainer';

const Content = () => {
    return(
      <div className="m-auto flex flex-col bg-gray-100 mb-20">
        <Switch>
          <Route exact path="/" component={PostContainer} />
          {/* Sign In / Sign Up */}
          {/* Submit new post */}
          {/* Comments */}
        </Switch>  
      </div>
    )
}

export default Content;