import React from 'react';
import Container from '../Layout/Container'
const Post = (props) => {
    return(
            <Container>
            <div className="flex flex-row items-center">
                <a href={props.url} target="new">
                    <h2 className="text-xl hover:text-blue-400">{props.title}</h2></a>
                <p className="text-sm ml-4">({props.shorturl})</p>
            </div>
            {/* User info */}
            <div className="text-sm flex flex-row justify-evenly w-1/3">
                <p>{props.username} |</p> 
                <p>{props.time} |</p> 
                <p>hide |</p> 
                <p>{props.comments} comments</p>
            </div>
            </Container>


    );
}

export default Post;