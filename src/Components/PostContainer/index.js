import React, { useContext, useEffect, useState, useRef } from "react";
import Post from "./Post";
import {FirebaseContext} from "../../utils/firebase";
import 'firebase/firestore';

export default () => {
  const firebase= useContext(FirebaseContext);
  const [posts, setPosts] = useState(null);
  const ref = useRef(firebase.firestore().collection(`posts`))

  useEffect(() =>{
      ref.get().then(snapshot => {
        if (!snapshot){
          setPosts(p =>[])
        }else {
          let posts = [];
          snapshot.forEach( post => {
            posts.push({ key: post.id, ...post.data() })
          })
          setPosts(p => posts)
        }
      }).catch(error => { console.log(error)})
  }, [])
  let postsToDisplay
  if (posts === null){
    postsToDisplay = (<div>Loading posts...</div>)
  }else if( posts.length === 0){
    postsToDisplay = (<div>No posts found</div>)
  }else{
    postsToDisplay = posts.map(post => {
      return (
        <Post 
          url= {post.url}
          id= {post.id}
          title= {post.title}
          owner = {post.owner}
        />)
    })
  }
  return (
    <>
      { postsToDisplay }
    </>
  )
}


