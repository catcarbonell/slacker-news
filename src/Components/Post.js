import React from 'react';

const Post = (props) => {
    return(
        <div className="w-2/3 mx-auto flex flex-col p-6 bg-gray-100 mt-10 rounded-lg shadow-xl border-2 border-solid border-gray-200">
            <div className="flex flex-row items-center">
                <a href={props.url} target="new"><h2 className="text-xl hover:text-blue-400">{props.title}</h2></a>
                <p className="text-sm ml-4">({props.shorturl})</p>
            </div>
            {/* User info */}
            <div className="text-sm flex flex-row justify-evenly w-1/3">
                <p>{props.username} |</p> 
                <p>{props.time} |</p> 
                <p>hide |</p> 
                <p>{props.comments} comments</p>
            </div>
        </div>

    );
}

export default Post;